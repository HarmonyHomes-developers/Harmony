#![no_std]

pub mod modules;

// Re-export the main types and contract for easier access
pub use modules::types::{Property, Location, PropertyDetails, DataKey};
pub use modules::contract::PropertyContract;
pub use modules::contract::PropertyContractClient;

mod test; 