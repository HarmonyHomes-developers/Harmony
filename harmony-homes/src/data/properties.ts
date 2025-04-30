export interface Property {
    id: number;
    title: string;
    address: string;
    price: number;
    type: string;
    status: 'sale' | 'rent';
    isMonthly?: boolean;
    beds: number;
    baths: number;
    size: number;
    features: string[];
    image: string;
  }
  
  export const propertyData: Property[] = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      address: "123 Main St, New York, NY",
      price: 450000,
      type: "apartment",
      status: "sale",
      beds: 2,
      baths: 2,
      size: 1200,
      features: ["Balcony", "Renovated"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      address: "456 Ocean Ave, Miami, FL",
      price: 1250000,
      type: "villa",
      status: "sale",
      beds: 4,
      baths: 3,
      size: 3500,
      features: ["Pool", "Garden"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 3,
      title: "Cozy Studio near University",
      address: "789 College Blvd, Boston, MA",
      price: 1800,
      type: "studio",
      status: "rent",
      isMonthly: true,
      beds: 1,
      baths: 1,
      size: 650,
      features: ["Furnished", "Utilities Included"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 4,
      title: "Family Home with Garden",
      address: "101 Suburban Dr, Chicago, IL",
      price: 750000,
      type: "house",
      status: "sale",
      beds: 3,
      baths: 2.5,
      size: 2200,
      features: ["Garden", "Garage"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 5,
      title: "Penthouse with City Views",
      address: "555 Skyline Ave, San Francisco, CA",
      price: 2500000,
      type: "penthouse",
      status: "sale",
      beds: 3,
      baths: 3,
      size: 2800,
      features: ["Panoramic View", "Private Elevator"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 6,
      title: "Renovated Loft in Arts District",
      address: "222 Creative St, Los Angeles, CA",
      price: 3200,
      type: "loft",
      status: "rent",
      isMonthly: true,
      beds: 1,
      baths: 1,
      size: 1100,
      features: ["High Ceilings", "Industrial Style"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 7,
      title: "Waterfront Cottage",
      address: "789 Lake Dr, Seattle, WA",
      price: 850000,
      type: "cottage",
      status: "sale",
      beds: 2,
      baths: 1,
      size: 1400,
      features: ["Waterfront", "Deck"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 8,
      title: "Downtown Office Space",
      address: "555 Business Ave, Austin, TX",
      price: 2800,
      type: "office",
      status: "rent",
      isMonthly: true,
      beds: 0,
      baths: 1,
      size: 1800,
      features: ["Conference Room", "Reception Area"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 9,
      title: "Historic Brownstone",
      address: "123 Heritage St, Brooklyn, NY",
      price: 1750000,
      type: "townhouse",
      status: "sale",
      beds: 4,
      baths: 3,
      size: 2600,
      features: ["Original Details", "Backyard"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 10,
      title: "Mountain Cabin Retreat",
      address: "456 Pine Ridge, Aspen, CO",
      price: 950000,
      type: "cabin",
      status: "sale",
      beds: 3,
      baths: 2,
      size: 1800,
      features: ["Fireplace", "Mountain View"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 11,
      title: "Beachfront Condo",
      address: "789 Shore Dr, Malibu, CA",
      price: 4500,
      type: "condo",
      status: "rent",
      isMonthly: true,
      beds: 2,
      baths: 2,
      size: 1600,
      features: ["Ocean View", "Pool Access"],
      image: "/placeholder-property.jpg"
    },
    {
      id: 12,
      title: "Eco-Friendly Tiny House",
      address: "101 Green Way, Portland, OR",
      price: 295000,
      type: "tiny house",
      status: "sale",
      beds: 1,
      baths: 1,
      size: 450,
      features: ["Solar Panels", "Rainwater Collection"],
      image: "/placeholder-property.jpg"
    }
  ];