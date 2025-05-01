# Harmony Homes Property Management Smart Contract

A Stellar Soroban smart contract for storing and managing property information on the blockchain for Harmony Homes.

## Overview

This smart contract provides functionality to:

- Register and store property information on the Stellar blockchain
- Retrieve property details by ID
- Update property information (status, price, details)
- Transfer property ownership securely
- Query properties by owner or status

## Property Data Structure

The contract defines several data structures to represent property information:

- **Property**: Main structure containing property ID, owner, location, details, status, and price
- **Location**: Geographic information including address, city, state, country, postal code, and coordinates
- **Coordinates**: Optional latitude and longitude coordinates
- **PropertyDetails**: Additional property attributes like type, size, bedrooms, bathrooms, year built, and special features

## Functions

### Core Functions

1. **register_property**: Register a new property with all necessary details
2. **get_property**: Retrieve property information by its unique ID
3. **update_property**: Update specific property attributes
4. **transfer_ownership**: Transfer property ownership to a new owner
5. **get_owner_properties**: List all properties owned by a specific address
6. **list_properties_by_status**: List properties by their status (active, pending, sold, etc.)

## Security Features

- **Owner Authentication**: Only authorized owners can modify or transfer their properties
- **New Owner Consent**: Ownership transfers require authorization from both the current and new owner
- **Event Logging**: Property transfers emit blockchain events for transparency and auditability

## Usage Examples

### Registering a Property

```rust
// Create a property with all required information
let property = client.register_property(
    &property_id,      // Unique identifier
    &owner_address,    // Stellar address of owner
    &location,         // Location information
    &details,          // Property details
    &status,           // Current status (active, pending, etc.)
    &price,            // Price in stroops (1 XLM = 10,000,000 stroops)
);
```

### Transferring Ownership

```rust
// Transfer property to a new owner
let transferred = client.transfer_ownership(
    &property_id,
    &new_owner_address,
);
```

### Querying Properties

```rust
// Get properties with "active" status
let active_properties = client.list_properties_by_status(
    &String::from_str(&env, "active")
);

// Get all properties owned by an address
let owner_properties = client.get_owner_properties(&owner_address);
```

## Development

### Building the Contract

```bash
cd harmony-homes/smart_contracts/contracts/property-contract
cargo build --target wasm32-unknown-unknown --release
```

### Testing

The contract includes comprehensive tests covering all functionality. Run them with:

```bash
cargo test
```

## Integration with Harmony Homes

This smart contract aligns with Harmony Homes' mission of enhancing real estate transparency and efficiency by:

1. Providing verifiable property records on the blockchain
2. Creating an immutable history of property ownership
3. Supporting streamlined property transactions
4. Enabling transparent property data access

## Future Enhancements

- Property search by geographic area
- Support for property photos/documents stored via IPFS
- Integration with other Stellar financial primitives (payments, escrow, etc.)
- Multi-party property ownership

## License

This project is open source and available under [LICENSE]. 