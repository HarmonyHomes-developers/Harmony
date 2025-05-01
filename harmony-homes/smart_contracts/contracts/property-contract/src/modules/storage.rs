use soroban_sdk::{Address, Env, String, Vec};
use crate::modules::types::DataKey;

/// Storage-related helper functions for property management
pub struct PropertyStorage;

impl PropertyStorage {
    /// Add property ID to owner's list
    pub fn add_property_to_owner(env: &Env, owner: &Address, property_id: &String) {
        let key = DataKey::OwnerProperties(owner.clone());
        let mut properties: Vec<String> = env.storage().instance().get(&key).unwrap_or_else(|| Vec::new(env));
        properties.push_back(property_id.clone());
        env.storage().instance().set(&key, &properties);
    }
    
    /// Remove property from owner's list
    pub fn remove_property_from_owner(env: &Env, owner: &Address, property_id: &String) {
        let key = DataKey::OwnerProperties(owner.clone());
        let mut properties: Vec<String> = env.storage().instance().get(&key).unwrap_or_else(|| Vec::new(env));
        
        // Find and remove the property ID
        let mut index = 0;
        while index < properties.len() {
            if &properties.get(index).unwrap() == property_id {
                properties.remove(index);
                break;
            }
            index += 1;
        }
        
        env.storage().instance().set(&key, &properties);
    }
    
    /// Add property to status list
    pub fn add_property_to_status(env: &Env, status: &String, property_id: &String) {
        let key = DataKey::StatusProperties(status.clone());
        let mut properties: Vec<String> = env.storage().instance().get(&key).unwrap_or_else(|| Vec::new(env));
        properties.push_back(property_id.clone());
        env.storage().instance().set(&key, &properties);
    }
    
    /// Remove property from status list
    pub fn remove_property_from_status(env: &Env, status: &String, property_id: &String) {
        let key = DataKey::StatusProperties(status.clone());
        let mut properties: Vec<String> = env.storage().instance().get(&key).unwrap_or_else(|| Vec::new(env));
        
        // Find and remove the property ID
        let mut index = 0;
        while index < properties.len() {
            if &properties.get(index).unwrap() == property_id {
                properties.remove(index);
                break;
            }
            index += 1;
        }
        
        env.storage().instance().set(&key, &properties);
    }
    
    /// Get all properties owned by an address
    pub fn get_owner_properties(env: &Env, owner: &Address) -> Vec<String> {
        let key = DataKey::OwnerProperties(owner.clone());
        env.storage().instance().get(&key).unwrap_or_else(|| Vec::new(env))
    }
    
    /// Get all properties with a specific status
    pub fn get_properties_by_status(env: &Env, status: &String) -> Vec<String> {
        let key = DataKey::StatusProperties(status.clone());
        env.storage().instance().get(&key).unwrap_or_else(|| Vec::new(env))
    }
} 