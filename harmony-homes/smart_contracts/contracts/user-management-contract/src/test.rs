#![cfg(test)]

use crate::*;
use soroban_sdk::{Env, String};

#[test]
fn test_create_user() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    let user_id = String::from_str(&env, "user1");
    let name = String::from_str(&env, "John Doe");
    let email = String::from_str(&env, "john.doe@example.com");
    let phone = Some(String::from_str(&env, "+1234567890"));
    let address = Some(String::from_str(&env, "123 Main St, City, Country"));
    
    let user = client.create_user(
        &user_id,
        &name,
        &email,
        &phone,
        &address,
    );
    
    assert_eq!(user.user_id, user_id);
    assert_eq!(user.name, name);
    assert_eq!(user.email, email);
    assert_eq!(user.phone, phone);
    assert_eq!(user.address, address);
    
    // Verify that the timestamp was set
    assert!(user.created_at > 0);
    assert_eq!(user.created_at, user.updated_at);
}

#[test]
#[should_panic(expected = "User with this ID already exists")]
fn test_create_duplicate_user() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    let user_id = String::from_str(&env, "duplicate_user");
    let name = String::from_str(&env, "Original Name");
    let email = String::from_str(&env, "original@example.com");
    
    // Create the user for the first time
    client.create_user(
        &user_id,
        &name,
        &email,
        &None,
        &None,
    );
    
    // Attempting to create another user with the same ID should fail
    client.create_user(
        &user_id,
        &String::from_str(&env, "New Name"),
        &String::from_str(&env, "new@example.com"),
        &None,
        &None,
    );
}

#[test]
fn test_get_user() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    let user_id = String::from_str(&env, "user2");
    let name = String::from_str(&env, "Jane Smith");
    let email = String::from_str(&env, "jane.smith@example.com");
    
    // Create user first
    client.create_user(
        &user_id,
        &name,
        &email,
        &None,
        &None,
    );
    
    // Then get the user
    let user = client.get_user(&user_id).unwrap();
    
    assert_eq!(user.user_id, user_id);
    assert_eq!(user.name, name);
    assert_eq!(user.email, email);
    assert_eq!(user.phone, None);
    assert_eq!(user.address, None);
    
    // Try to get non-existent user
    let non_existent = String::from_str(&env, "non_existent");
    let result = client.get_user(&non_existent);
    assert_eq!(result, None);
}

#[test]
fn test_update_user() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    let user_id = String::from_str(&env, "user3");
    let name = String::from_str(&env, "Bob Johnson");
    let email = String::from_str(&env, "bob.johnson@example.com");
    
    // Create user first
    client.create_user(
        &user_id,
        &name,
        &email,
        &None,
        &None,
    );
    
    // Update user information
    let new_name = Some(String::from_str(&env, "Robert Johnson"));
    let new_phone = Some(String::from_str(&env, "+9876543210"));
    
    let updated_user = client.update_user(
        &user_id,
        &new_name,
        &None,
        &new_phone,
        &None,
    ).unwrap();
    
    // Clone to prevent new_name from being moved
    let expected_name = new_name.clone().unwrap();
    assert_eq!(updated_user.name, expected_name);
    assert_eq!(updated_user.email, email); // Email should remain unchanged
    assert_eq!(updated_user.phone, new_phone);
    
    // Get the user to verify updates were saved
    let user = client.get_user(&user_id).unwrap();
    assert_eq!(user.name, expected_name);
    assert_eq!(user.phone, new_phone);
}

#[test]
fn test_update_nonexistent_user() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    let user_id = String::from_str(&env, "nonexistent_user");
    let new_name = Some(String::from_str(&env, "New Name"));
    
    // Attempt to update a user that doesn't exist
    let result = client.update_user(
        &user_id,
        &new_name,
        &None,
        &None,
        &None,
    );
    
    // Should return None
    assert_eq!(result, None);
}

#[test]
fn test_update_only_specific_fields() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    // Create a user with all fields
    let user_id = String::from_str(&env, "update_fields_user");
    let name = String::from_str(&env, "Original Name");
    let email = String::from_str(&env, "original@example.com");
    let phone = Some(String::from_str(&env, "+1111111111"));
    let address = Some(String::from_str(&env, "Original Address"));
    
    client.create_user(
        &user_id,
        &name,
        &email,
        &phone,
        &address,
    );
    
    // Update only the phone
    let new_phone = Some(String::from_str(&env, "+2222222222"));
    let updated_user = client.update_user(
        &user_id,
        &None,
        &None,
        &new_phone,
        &None,
    ).unwrap();
    
    // Verify that only the phone changed
    assert_eq!(updated_user.name, name);
    assert_eq!(updated_user.email, email);
    assert_eq!(updated_user.phone, new_phone);
    assert_eq!(updated_user.address, address);
    
    // Update only the email and address
    let new_email = Some(String::from_str(&env, "new@example.com"));
    let new_address = Some(String::from_str(&env, "New Address"));
    let updated_user = client.update_user(
        &user_id,
        &None,
        &new_email,
        &None,
        &new_address,
    ).unwrap();
    
    // Verify the changes
    assert_eq!(updated_user.name, name);
    assert_eq!(updated_user.email, new_email.unwrap());
    assert_eq!(updated_user.phone, new_phone);
    assert_eq!(updated_user.address, new_address);
}

#[test]
fn test_delete_user() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    let user_id = String::from_str(&env, "user4");
    let name = String::from_str(&env, "Alice Brown");
    let email = String::from_str(&env, "alice.brown@example.com");
    
    // Create user first
    client.create_user(
        &user_id,
        &name,
        &email,
        &None,
        &None,
    );
    
    // Delete the user
    let result = client.delete_user(&user_id);
    assert_eq!(result, true);
    
    // Try to get the deleted user
    let user = client.get_user(&user_id);
    assert_eq!(user, None);
    
    // Try to delete again (should return false)
    let result = client.delete_user(&user_id);
    assert_eq!(result, false);
}

#[test]
fn test_list_users() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    // Create multiple users
    for i in 0..5 {
        let user_id_str = if i == 0 {"list_user0"} 
                         else if i == 1 {"list_user1"} 
                         else if i == 2 {"list_user2"} 
                         else if i == 3 {"list_user3"} 
                         else {"list_user4"};
        let name_str = if i == 0 {"User 0"} 
                      else if i == 1 {"User 1"} 
                      else if i == 2 {"User 2"} 
                      else if i == 3 {"User 3"} 
                      else {"User 4"};
        let email_str = if i == 0 {"user0@example.com"} 
                       else if i == 1 {"user1@example.com"} 
                       else if i == 2 {"user2@example.com"} 
                       else if i == 3 {"user3@example.com"} 
                       else {"user4@example.com"};
                      
        let user_id = String::from_str(&env, user_id_str);
        let name = String::from_str(&env, name_str);
        let email = String::from_str(&env, email_str);
        
        client.create_user(
            &user_id,
            &name,
            &email,
            &None,
            &None,
        );
    }
    
    // List all users
    let users = client.list_users(&0, &10);
    assert_eq!(users.len(), 5);
    
    // Test pagination
    let page1 = client.list_users(&0, &2);
    assert_eq!(page1.len(), 2);
    
    let page2 = client.list_users(&2, &2);
    assert_eq!(page2.len(), 2);
    
    let page3 = client.list_users(&4, &2);
    assert_eq!(page3.len(), 1);
}

#[test]
fn test_empty_users_list() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    // No users were created, list should be empty
    let users = client.list_users(&0, &10);
    assert_eq!(users.len(), 0);
}

#[test]
fn test_list_users_with_invalid_start() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    // Create some users
    for i in 0..3 {
        let user_id_str = match i {
            0 => "test_user_0",
            1 => "test_user_1",
            _ => "test_user_2",
        };
        
        let name = String::from_str(&env, "Test User");
        let email = String::from_str(&env, "test@example.com");
        let user_id = String::from_str(&env, user_id_str);
        
        client.create_user(
            &user_id,
            &name,
            &email,
            &None,
            &None,
        );
    }
    
    // List with an out-of-range start
    let users = client.list_users(&10, &5);
    assert_eq!(users.len(), 0);
}

#[test]
fn test_create_and_delete_multiple_users() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    // Create multiple users
    let mut user_ids = Vec::new(&env);
    for i in 0..5 {
        let user_id_str = match i {
            0 => "delete_test_100",
            1 => "delete_test_101",
            2 => "delete_test_102",
            3 => "delete_test_103",
            _ => "delete_test_104",
        };
        
        let user_id = String::from_str(&env, user_id_str);
        let name = String::from_str(&env, "Delete Test User");
        let email = String::from_str(&env, "delete_test@example.com");
        
        client.create_user(
            &user_id,
            &name,
            &email,
            &None,
            &None,
        );
        
        user_ids.push_back(user_id);
    }
    
    // Verify there are 5 users
    let users = client.list_users(&0, &10);
    assert_eq!(users.len(), 5);
    
    // Delete users in reverse order
    for i in (0..5).rev() {
        let user_id = user_ids.get(i).unwrap();
        let result = client.delete_user(&user_id);
        assert_eq!(result, true);
        
        // Verify the list has been reduced
        let remaining = client.list_users(&0, &10);
        assert_eq!(remaining.len() as u32, i);
    }
    
    // Verify no users remain
    let final_users = client.list_users(&0, &10);
    assert_eq!(final_users.len(), 0);
}

#[test]
fn test_update_remove_optional_fields() {
    let env = Env::default();
    let contract_id = env.register(UserManagementContract, ());
    let client = UserManagementContractClient::new(&env, &contract_id);
    
    // Create a user with optional fields
    let user_id = String::from_str(&env, "optional_fields_user");
    let name = String::from_str(&env, "Optional Fields");
    let email = String::from_str(&env, "optional@example.com");
    let phone = Some(String::from_str(&env, "+9999999999"));
    let address = Some(String::from_str(&env, "Optional Address"));
    
    client.create_user(
        &user_id,
        &name,
        &email,
        &phone,
        &address,
    );
    
    // Update with optional fields set to None
    // In our implementation, passing None maintains the existing value,
    // but we could modify the logic if we want to allow removing values
    
    // For now, this test only verifies the current behavior
    let updated_user = client.update_user(
        &user_id,
        &None,
        &None,
        &None,
        &None,
    ).unwrap();
    
    // Optional fields should maintain their values
    assert_eq!(updated_user.phone, phone);
    assert_eq!(updated_user.address, address);
} 