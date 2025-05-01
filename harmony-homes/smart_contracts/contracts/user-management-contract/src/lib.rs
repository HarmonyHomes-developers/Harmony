#![no_std]
use soroban_sdk::{contractimpl, contract, Env, String, Vec};

mod models;
mod storage;
mod user;
mod test;

use models::UserData;
use user::UserManagement;

#[contract]
pub struct UserManagementContract;

#[contractimpl]
impl UserManagementContract {
    /// Create a new user in the system
    pub fn create_user(
        env: Env,
        user_id: String,
        name: String,
        email: String, 
        phone: Option<String>,
        address: Option<String>,
    ) -> UserData {
        let user_management = UserManagement::new(&env);
        user_management.create_user(user_id, name, email, phone, address)
    }

    /// Get user information by ID
    pub fn get_user(env: Env, user_id: String) -> Option<UserData> {
        let user_management = UserManagement::new(&env);
        user_management.get_user(user_id)
    }
    
    /// Update user information
    pub fn update_user(
        env: Env,
        user_id: String,
        name: Option<String>,
        email: Option<String>,
        phone: Option<String>,
        address: Option<String>,
    ) -> Option<UserData> {
        let user_management = UserManagement::new(&env);
        user_management.update_user(user_id, name, email, phone, address)
    }
    
    /// Delete a user from the system
    pub fn delete_user(env: Env, user_id: String) -> bool {
        let user_management = UserManagement::new(&env);
        user_management.delete_user(user_id)
    }
    
    /// List all users in the system (with pagination)
    pub fn list_users(env: Env, start: u32, limit: u32) -> Vec<UserData> {
        let user_management = UserManagement::new(&env);
        user_management.list_users(start, limit)
    }
}