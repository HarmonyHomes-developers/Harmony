use soroban_sdk::{Env, String, Vec};
use crate::models::UserData;
use crate::storage::UserStorage;

/// Main business logic for user management
pub struct UserManagement<'a> {
    env: &'a Env,
    storage: UserStorage<'a>,
}

impl<'a> UserManagement<'a> {
    /// Create a new UserManagement instance
    pub fn new(env: &'a Env) -> Self {
        Self {
            env,
            storage: UserStorage::new(env),
        }
    }
    
    /// Create a new user in the system
    pub fn create_user(
        &self,
        user_id: String,
        name: String,
        email: String,
        phone: Option<String>,
        address: Option<String>,
    ) -> UserData {
        // Verify user does not already exist
        if self.storage.get_user(&user_id).is_some() {
            panic!("User with this ID already exists");
        }
        
        // Create new user data
        let user = UserData::new(
            self.env,
            user_id,
            name,
            email,
            phone,
            address,
        );
        
        // Save to storage
        self.storage.save_user(&user);
        
        user
    }
    
    /// Get user information by ID
    pub fn get_user(&self, user_id: String) -> Option<UserData> {
        self.storage.get_user(&user_id)
    }
    
    /// Update user information
    pub fn update_user(
        &self,
        user_id: String,
        name: Option<String>,
        email: Option<String>,
        phone: Option<String>,
        address: Option<String>,
    ) -> Option<UserData> {
        // Find existing user
        if let Some(user) = self.storage.get_user(&user_id) {
            // Update user data
            let updated_user = user.update(
                self.env,
                name,
                email,
                phone,
                address,
            );
            
            // Save to storage
            self.storage.save_user(&updated_user);
            
            Some(updated_user)
        } else {
            None
        }
    }
    
    /// Delete a user from the system
    pub fn delete_user(&self, user_id: String) -> bool {
        self.storage.delete_user(&user_id)
    }
    
    /// List all users in the system (with pagination)
    pub fn list_users(&self, start: u32, limit: u32) -> Vec<UserData> {
        // Apply reasonable limits to prevent excessive gas usage
        let max_limit = 50;
        let actual_limit = core::cmp::min(limit, max_limit);
        
        self.storage.list_users(start, actual_limit)
    }
} 