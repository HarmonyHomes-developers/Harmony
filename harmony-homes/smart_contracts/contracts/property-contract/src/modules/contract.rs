use soroban_sdk::{contract, contractimpl, Address, Env, String, Vec, symbol_short};
use crate::modules::types::{Property, Location, PropertyDetails, DataKey};
use crate::modules::storage::PropertyStorage;

/// Stellar smart contract for property management in Harmony Homes
#[contract]
pub struct PropertyContract;

#[contractimpl]
impl PropertyContract {
    /// Register a new property in the system
    pub fn register_property(
        env: Env,
        property_id: String,
        owner: Address,
        location: Location,
        details: PropertyDetails,
        status: String,
        price: i128,
    ) -> Property {
        // Authenticate owner
        owner.require_auth();
        
        // Create the property record
        let property = Property {
            property_id: property_id.clone(),
            owner: owner.clone(),
            location,
            details,
            status: status.clone(),
            price,
        };
        
        // Store the property using its ID as the key
        env.storage().instance().set(&property_id, &property);
        
        // Add property ID to the owner's properties
        PropertyStorage::add_property_to_owner(&env, &owner, &property_id);
        
        // Add property ID to the status list
        PropertyStorage::add_property_to_status(&env, &status, &property_id);
        
        // Return the created property
        property
    }
    
    /// Get property information by ID
    pub fn get_property(env: Env, property_id: String) -> Option<Property> {
        env.storage().instance().get(&property_id)
    }
    
    /// Update property information
    pub fn update_property(
        env: Env,
        property_id: String,
        status: Option<String>,
        price: Option<i128>,
        details: Option<PropertyDetails>,
    ) -> Property {
        // Get the existing property
        let mut property: Property = env.storage().instance().get(&property_id)
            .expect("Property not found");
        
        // Authenticate owner
        property.owner.require_auth();
        
        // Update fields if provided
        if let Some(new_status) = status {
            // Update status lists if status changed
            if new_status != property.status {
                PropertyStorage::remove_property_from_status(&env, &property.status, &property_id);
                PropertyStorage::add_property_to_status(&env, &new_status, &property_id);
            }
            property.status = new_status;
        }
        
        if let Some(new_price) = price {
            property.price = new_price;
        }
        
        if let Some(new_details) = details {
            property.details = new_details;
        }
        
        // Save updated property
        env.storage().instance().set(&property_id, &property);
        
        property
    }
    
    /// Transfer property ownership
    pub fn transfer_ownership(
        env: Env,
        property_id: String,
        new_owner: Address,
    ) -> Property {
        // Get the existing property
        let mut property: Property = env.storage().instance().get(&property_id)
            .expect("Property not found");
        
        // Authenticate current owner
        property.owner.require_auth();
        
        // Also require authorization from the new owner to accept
        new_owner.require_auth();
        
        // Remove property from current owner's list
        PropertyStorage::remove_property_from_owner(&env, &property.owner, &property_id);
        
        // Update owner
        let previous_owner = property.owner;
        property.owner = new_owner.clone();
        
        // Update property status
        property.status = String::from_str(&env, "transferred");
        
        // Save updated property
        env.storage().instance().set(&property_id, &property);
        
        // Add property to new owner's list
        PropertyStorage::add_property_to_owner(&env, &new_owner, &property_id);
        
        // Emit event for property transfer
        env.events().publish(
            (symbol_short!("transfer"), property_id.clone()),
            (previous_owner, new_owner),
        );
        
        property
    }
    
    /// List all properties owned by an address
    pub fn get_owner_properties(env: Env, owner: Address) -> Vec<String> {
        PropertyStorage::get_owner_properties(&env, &owner)
    }
    
    /// List properties by status (e.g., "active", "pending", "sold")
    pub fn list_properties_by_status(env: Env, status: String) -> Vec<String> {
        PropertyStorage::get_properties_by_status(&env, &status)
    }
} 