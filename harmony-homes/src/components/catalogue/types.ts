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
  
  export type StatusFilter = 'all' | 'sale' | 'rent';
  export type SortOrder = 'newest' | 'price-low' | 'price-high' | 'size-low' | 'size-high';
  