#![cfg(test)]

use crate::modules::types::{Property, Location, PropertyDetails};
use crate::modules::contract::{PropertyContract, PropertyContractClient};
use soroban_sdk::{testutils::Address as _, vec, Env, String, Address};

#[test]
fn test_register_and_get_property() {
    let env = Env::default();
    let contract_id = env.register(PropertyContract, ());
    let client = PropertyContractClient::new(&env, &contract_id);
    
    // Create test accounts
    let owner = Address::generate(&env);
    
    // Create test location
    let location = Location {
        address: String::from_str(&env, "123 Main St"),
        city: String::from_str(&env, "New York"),
        state: String::from_str(&env, "NY"),
        country: String::from_str(&env, "USA"),
        postal_code: String::from_str(&env, "10001"),
        latitude: Some(String::from_str(&env, "40.7128")),
        longitude: Some(String::from_str(&env, "74.0060")),
    };
    
    // Create test property details
    let details = PropertyDetails {
        property_type: String::from_str(&env, "apartment"),
        size: 1500,
        bedrooms: 3,
        bathrooms: 2,
        year_built: 2010,
        features: vec![
            &env,
            String::from_str(&env, "balcony"),
            String::from_str(&env, "central_air"),
        ],
    };
    
    // Set property ID and status
    let property_id = String::from_str(&env, "PROP001");
    let status = String::from_str(&env, "active");
    let price = 250_000_000_000; // 25,000 XLM in stroops
    
    // Register the property with authentication
    env.mock_all_auths();
    
    let result = client.register_property(
        &property_id,
        &owner,
        &location,
        &details,
        &status,
        &price,
    );
    
    // Verify the registered property
    assert_eq!(result.property_id, property_id);
    assert_eq!(result.owner, owner);
    assert_eq!(result.status, status);
    assert_eq!(result.price, price);
    
    // Retrieve the property and verify
    let retrieved = client.get_property(&property_id).unwrap();
    assert_eq!(retrieved.property_id, property_id);
    assert_eq!(retrieved.location.city, location.city);
    assert_eq!(retrieved.details.bedrooms, 3);
}

#[test]
fn test_update_property() {
    let env = Env::default();
    let contract_id = env.register(PropertyContract, ());
    let client = PropertyContractClient::new(&env, &contract_id);
    
    // Create test accounts
    let owner = Address::generate(&env);
    
    // Create test location
    let location = Location {
        address: String::from_str(&env, "123 Main St"),
        city: String::from_str(&env, "New York"),
        state: String::from_str(&env, "NY"),
        country: String::from_str(&env, "USA"),
        postal_code: String::from_str(&env, "10001"),
        latitude: Some(String::from_str(&env, "40.7128")),
        longitude: Some(String::from_str(&env, "74.0060")),
    };
    
    // Create test property details
    let details = PropertyDetails {
        property_type: String::from_str(&env, "apartment"),
        size: 1500,
        bedrooms: 3,
        bathrooms: 2,
        year_built: 2010,
        features: vec![
            &env,
            String::from_str(&env, "balcony"),
            String::from_str(&env, "central_air"),
        ],
    };
    
    // Set property ID and status
    let property_id = String::from_str(&env, "PROP002");
    let status = String::from_str(&env, "active");
    let price = 250_000_000_000; // 25,000 XLM in stroops
    
    // Register the property with authentication
    env.mock_all_auths();
    
    client.register_property(
        &property_id,
        &owner,
        &location,
        &details,
        &status,
        &price,
    );
    
    // Update property status and price
    let new_status = String::from_str(&env, "pending");
    let new_price = 260_000_000_000; // 26,000 XLM in stroops
    
    let updated = client.update_property(
        &property_id,
        &Some(new_status.clone()),
        &Some(new_price),
        &None,
    );
    
    // Verify the updated property
    assert_eq!(updated.status, new_status);
    assert_eq!(updated.price, new_price);
    assert_eq!(updated.details.bedrooms, 3); // Should remain unchanged
    
    // Update property details
    let new_details = PropertyDetails {
        property_type: String::from_str(&env, "apartment"),
        size: 1500,
        bedrooms: 3,
        bathrooms: 3, // Updated bathrooms
        year_built: 2010,
        features: vec![
            &env,
            String::from_str(&env, "balcony"),
            String::from_str(&env, "central_air"),
            String::from_str(&env, "renovated"), // Added feature
        ],
    };
    
    let updated = client.update_property(
        &property_id,
        &None,
        &None,
        &Some(new_details.clone()),
    );
    
    // Verify the updated property details
    assert_eq!(updated.details.bathrooms, 3);
    assert_eq!(updated.details.features.len(), 3);
}

#[test]
fn test_transfer_ownership() {
    let env = Env::default();
    let contract_id = env.register(PropertyContract, ());
    let client = PropertyContractClient::new(&env, &contract_id);
    
    // Create test accounts
    let original_owner = Address::generate(&env);
    let new_owner = Address::generate(&env);
    
    // Create test location
    let location = Location {
        address: String::from_str(&env, "123 Main St"),
        city: String::from_str(&env, "New York"),
        state: String::from_str(&env, "NY"),
        country: String::from_str(&env, "USA"),
        postal_code: String::from_str(&env, "10001"),
        latitude: Some(String::from_str(&env, "40.7128")),
        longitude: Some(String::from_str(&env, "74.0060")),
    };
    
    // Create test property details
    let details = PropertyDetails {
        property_type: String::from_str(&env, "apartment"),
        size: 1500,
        bedrooms: 3,
        bathrooms: 2,
        year_built: 2010,
        features: vec![
            &env,
            String::from_str(&env, "balcony"),
            String::from_str(&env, "central_air"),
        ],
    };
    
    // Set property ID and status
    let property_id = String::from_str(&env, "PROP003");
    let status = String::from_str(&env, "active");
    let price = 250_000_000_000; // 25,000 XLM in stroops
    
    // Register the property with authentication
    env.mock_all_auths();
    
    client.register_property(
        &property_id,
        &original_owner,
        &location,
        &details,
        &status,
        &price,
    );
    
    // Transfer ownership
    let transferred = client.transfer_ownership(
        &property_id,
        &new_owner,
    );
    
    // Verify the transfer
    assert_eq!(transferred.owner, new_owner);
    assert_eq!(transferred.status, String::from_str(&env, "transferred"));
    
    // Verify owner's properties
    let original_owner_props = client.get_owner_properties(&original_owner);
    let new_owner_props = client.get_owner_properties(&new_owner);
    
    assert_eq!(original_owner_props.len(), 0);
    assert_eq!(new_owner_props.len(), 1);
    assert_eq!(new_owner_props.get(0).unwrap(), property_id);
}

#[test]
fn test_list_properties_by_status() {
    let env = Env::default();
    let contract_id = env.register(PropertyContract, ());
    let client = PropertyContractClient::new(&env, &contract_id);
    
    // Create test accounts
    let owner = Address::generate(&env);
    
    // Create test location
    let location = Location {
        address: String::from_str(&env, "123 Main St"),
        city: String::from_str(&env, "New York"),
        state: String::from_str(&env, "NY"),
        country: String::from_str(&env, "USA"),
        postal_code: String::from_str(&env, "10001"),
        latitude: None,
        longitude: None,
    };
    
    // Create test property details
    let details = PropertyDetails {
        property_type: String::from_str(&env, "apartment"),
        size: 1500,
        bedrooms: 3,
        bathrooms: 2,
        year_built: 2010,
        features: vec![&env],
    };
    
    // Mock authentication
    env.mock_all_auths();
    
    // Register multiple properties with different statuses
    let active_status = String::from_str(&env, "active");
    let sold_status = String::from_str(&env, "sold");
    
    // Register first property (active)
    let prop1_id = String::from_str(&env, "PROP_ACTIVE_1");
    client.register_property(
        &prop1_id,
        &owner,
        &location,
        &details,
        &active_status,
        &250_000_000_000,
    );
    
    // Register second property (active)
    let prop2_id = String::from_str(&env, "PROP_ACTIVE_2");
    client.register_property(
        &prop2_id,
        &owner,
        &location,
        &details,
        &active_status,
        &300_000_000_000,
    );
    
    // Register third property (sold)
    let prop3_id = String::from_str(&env, "PROP_SOLD_1");
    client.register_property(
        &prop3_id,
        &owner,
        &location,
        &details,
        &sold_status,
        &275_000_000_000,
    );
    
    // Get properties by status
    let active_properties = client.list_properties_by_status(&active_status);
    let sold_properties = client.list_properties_by_status(&sold_status);
    let pending_properties = client.list_properties_by_status(
        &String::from_str(&env, "pending")
    );
    
    // Verify the results
    assert_eq!(active_properties.len(), 2);
    assert_eq!(sold_properties.len(), 1);
    assert_eq!(pending_properties.len(), 0);
}

#[test]
fn test_get_owner_properties() {
    let env = Env::default();
    let contract_id = env.register(PropertyContract, ());
    let client = PropertyContractClient::new(&env, &contract_id);
    
    // Create test accounts
    let owner1 = Address::generate(&env);
    let owner2 = Address::generate(&env);
    
    // Create test location
    let location = Location {
        address: String::from_str(&env, "123 Main St"),
        city: String::from_str(&env, "New York"),
        state: String::from_str(&env, "NY"),
        country: String::from_str(&env, "USA"),
        postal_code: String::from_str(&env, "10001"),
        latitude: None,
        longitude: None,
    };
    
    // Create test property details
    let details = PropertyDetails {
        property_type: String::from_str(&env, "apartment"),
        size: 1500,
        bedrooms: 3,
        bathrooms: 2,
        year_built: 2010,
        features: vec![&env],
    };
    
    // Mock authentication
    env.mock_all_auths();
    
    let status = String::from_str(&env, "active");
    
    // Register properties for owner1
    let prop1_id = String::from_str(&env, "OWNER1_PROP1");
    client.register_property(
        &prop1_id,
        &owner1,
        &location,
        &details,
        &status,
        &250_000_000_000,
    );
    
    let prop2_id = String::from_str(&env, "OWNER1_PROP2");
    client.register_property(
        &prop2_id,
        &owner1,
        &location,
        &details,
        &status,
        &300_000_000_000,
    );
    
    // Register property for owner2
    let prop3_id = String::from_str(&env, "OWNER2_PROP1");
    client.register_property(
        &prop3_id,
        &owner2,
        &location,
        &details,
        &status,
        &275_000_000_000,
    );
    
    // Get properties by owner
    let owner1_properties = client.get_owner_properties(&owner1);
    let owner2_properties = client.get_owner_properties(&owner2);
    
    // Verify the results
    assert_eq!(owner1_properties.len(), 2);
    assert_eq!(owner2_properties.len(), 1);
} 