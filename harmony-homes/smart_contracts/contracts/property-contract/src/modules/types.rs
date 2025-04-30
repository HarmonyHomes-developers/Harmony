use soroban_sdk::{contracttype, Address, Env, String, Vec};

/// Property record for real estate managed by Harmony Homes
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Property {
    /// Unique identifier for the property
    pub property_id: String,
    /// Current owner of the property
    pub owner: Address,
    /// Property location data 
    pub location: Location,
    /// Additional property details
    pub details: PropertyDetails,
    /// Property listing status (active, pending, sold, etc.)
    pub status: String,
    /// Price in stroops (1 XLM = 10,000,000 stroops)
    pub price: i128,
}

/// Geographic location information for a property
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Location {
    /// Street address
    pub address: String,
    /// City
    pub city: String,
    /// State/Province
    pub state: String,
    /// Country
    pub country: String,
    /// Postal/ZIP code
    pub postal_code: String,
    /// Optional coordinates - stored as strings to avoid serialization issues
    pub latitude: Option<String>,
    pub longitude: Option<String>,
}

/// Detailed property attributes and features
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct PropertyDetails {
    /// Property type (apartment, house, land, etc.)
    pub property_type: String,
    /// Size in square feet/meters
    pub size: i128,
    /// Number of bedrooms
    pub bedrooms: u32,
    /// Number of bathrooms
    pub bathrooms: u32,
    /// Year built
    pub year_built: u32,
    /// Other notable features (storage as key-value pairs)
    pub features: Vec<String>,
}

/// Storage keys for the contract data
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    /// Key for properties owned by an address
    OwnerProperties(Address),
    /// Key for properties with a certain status
    StatusProperties(String),
} 