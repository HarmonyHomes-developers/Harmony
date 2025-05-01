use soroban_sdk::{Env, String, Vec, symbol_short, Symbol, Map};
use crate::models::UserData;

/// Keys used for storage
pub struct Keys;

impl Keys {
    /// Key for storing the user map
    pub fn user_map() -> Symbol {
        symbol_short!("USERS")
    }
    
    /// Key for storing all user IDs
    pub const USER_IDS: Symbol = symbol_short!("USER_IDS");
}

/// Storage helper for user management
pub struct UserStorage<'a> {
    env: &'a Env
}

impl<'a> UserStorage<'a> {
    /// Create a new UserStorage instance
    pub fn new(env: &'a Env) -> Self {
        Self { env }
    }
    
    /// Get or create the users map
    fn get_users_map(&self) -> Map<String, UserData> {
        self.env.storage().persistent().get(&Keys::user_map())
            .unwrap_or_else(|| Map::new(self.env))
    }
    
    /// Store a user in the contract's persistent storage
    pub fn save_user(&self, user: &UserData) {
        // Get the users map
        let mut users_map = self.get_users_map();
        
        // Save the user to the map
        users_map.set(user.user_id.clone(), user.clone());
        
        // Save the updated map
        self.env.storage().persistent().set(&Keys::user_map(), &users_map);
        
        // Add to the list of all user IDs if not already present
        let mut user_ids = self.get_all_user_ids();
        if !user_ids.contains(&user.user_id) {
            user_ids.push_back(user.user_id.clone());
            self.env.storage().persistent().set(&Keys::USER_IDS, &user_ids);
        }
    }
    
    /// Retrieve a user by ID
    pub fn get_user(&self, user_id: &String) -> Option<UserData> {
        let users_map = self.get_users_map();
        users_map.get(user_id.clone())
    }
    
    /// Remove a user from storage
    pub fn delete_user(&self, user_id: &String) -> bool {
        // Get the users map
        let mut users_map = self.get_users_map();
        
        // Check if the user exists
        if users_map.contains_key(user_id.clone()) {
            // Remove the user from the map
            users_map.remove(user_id.clone());
            
            // Save the updated map
            self.env.storage().persistent().set(&Keys::user_map(), &users_map);
            
            // Also remove from the list of user IDs
            let user_ids = self.get_all_user_ids();
            
            // Create a new Vec filtering out the ID to be removed
            let mut new_user_ids = Vec::new(self.env);
            for id in user_ids.iter() {
                if &id != user_id {
                    new_user_ids.push_back(id.clone());
                }
            }
            
            self.env.storage().persistent().set(&Keys::USER_IDS, &new_user_ids);
            true
        } else {
            false
        }
    }
    
    /// Get a list of all user IDs
    pub fn get_all_user_ids(&self) -> Vec<String> {
        self.env.storage().persistent().get(&Keys::USER_IDS)
            .unwrap_or_else(|| Vec::new(self.env))
    }
    
    /// Get a paginated list of users
    pub fn list_users(&self, start: u32, limit: u32) -> Vec<UserData> {
        let user_ids = self.get_all_user_ids();
        let total_users = user_ids.len();
        
        let mut result = Vec::new(self.env);
        let end = core::cmp::min(start + limit, total_users as u32);
        
        if start < total_users as u32 {
            for i in start..end {
                let user_id = user_ids.get(i as u32).unwrap();
                if let Some(user) = self.get_user(&user_id) {
                    result.push_back(user);
                }
            }
        }
        
        result
    }
} 