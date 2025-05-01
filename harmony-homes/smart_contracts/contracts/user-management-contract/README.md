# User Management Contract for Harmony

This smart contract on the Stellar network (Soroban) manages user information for the Harmony project, allowing for secure storage and retrieval of user data on the blockchain.

## Features

- **User Data Storage**: Stores name, contact information, and user ID.
- **Modular Structure**: Organized into separate components for easier maintenance and extension.
- **Blockchain Security**: User data is securely stored on the Stellar blockchain.
- **Complete CRUD Operations**:
  - Create new users
  - Retrieve user information by ID
  - Update existing user information
  - Delete users
  - List users with pagination

## Contract Structure

The contract is organized into several modules:

- `lib.rs`: Entry point of the contract with the public interface implementation.
- `models.rs`: Defines the `UserData` structure that represents user information.
- `storage.rs`: Handles data persistence using Soroban storage.
- `user.rs`: Implements business logic for user management.
- `test.rs`: Contains unit tests to verify contract functionality.

## User Data Structure

Each user contains the following fields:
- `user_id`: Unique identifier for the user
- `name`: User's full name
- `email`: Email address
- `phone`: Phone number (optional)
- `address`: Physical address (optional)
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## Contract Interface

The contract exposes the following functions:

```rust
// Create a new user
pub fn create_user(
    env: Env,
    user_id: String,
    name: String,
    email: String, 
    phone: Option<String>,
    address: Option<String>,
) -> UserData

// Get user information by ID
pub fn get_user(env: Env, user_id: String) -> Option<UserData>

// Update user information
pub fn update_user(
    env: Env,
    user_id: String,
    name: Option<String>,
    email: Option<String>,
    phone: Option<String>,
    address: Option<String>,
) -> Option<UserData>

// Delete a user
pub fn delete_user(env: Env, user_id: String) -> bool

// List users with pagination
pub fn list_users(env: Env, start: u32, limit: u32) -> Vec<UserData>
```

## Building and Testing

### Prerequisites

- Rust and Cargo installed
- Soroban CLI (`stellar` command)

### Build

To build the contract, run:

```bash
stellar contract build
```

The built WASM file will be available in the `target/wasm32-unknown-unknown/release/` directory.

### Test

The contract includes comprehensive unit tests to validate its functionality. To run the tests:

```bash
cargo test
```

## Implementation Notes

1. The contract uses Maps for efficient user data storage
2. A separate list of user IDs is implemented to facilitate enumeration and pagination
3. All storage operations are persistent on the blockchain
4. Validations are implemented to prevent duplicate user IDs
5. Proper error handling ensures contract reliability

## Deployment

To deploy the contract to the Stellar network, use the Soroban CLI:

```bash
# For testnet
stellar contract deploy --wasm target/wasm32-unknown-unknown/release/user_management_contract.wasm --network testnet --source <your-keypair-source>

# For mainnet (when ready for production)
stellar contract deploy --wasm target/wasm32-unknown-unknown/release/user_management_contract.wasm --network public --source <your-keypair-source>
```

## Interacting with the Contract

Once deployed, you can interact with the contract using the Soroban CLI:

```bash
# Example: Create a user
stellar contract invoke --id <contract-id> --source <your-keypair-source> --network testnet -- create_user '{"user_id": "user1", "name": "John Doe", "email": "john@example.com", "phone": "+1234567890", "address": "123 Main St"}'

# Example: Get a user by ID
stellar contract invoke --id <contract-id> --source <your-keypair-source> --network testnet -- get_user '{"user_id": "user1"}'
```

## Security Considerations

- User IDs should be unique and properly managed by the client application
- Consider access control for sensitive operations in production environments
- Proper validation should be implemented in client applications before submitting data 