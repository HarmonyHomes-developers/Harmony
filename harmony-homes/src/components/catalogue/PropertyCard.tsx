"use client";
import { Property } from './types';
import { formatPrice } from '../utils/formatters';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <div className="relative h-48 bg-gray-100">
        <div className="absolute top-0 right-0 mt-3 mr-3 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded">
          {property.status === 'rent' ? 'For Rent' : 'For Sale'}
        </div>
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <span className="sr-only">Property image</span>
          <div className="p-6 border-2 border-dashed border-gray-300 rounded-md">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-900">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{property.address}</p>
        
        <div className="flex justify-between mb-3">
          <span className="text-gray-900 font-bold">
            ${formatPrice(property.price)}{property.isMonthly ? '/month' : ''}
          </span>
          <span className="text-sm text-gray-600 capitalize">{property.type}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</div>
          <div>{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</div>
          <div>{property.size} sq ft</div>
        </div>
        
        {property.features.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {property.features.map((feature, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};