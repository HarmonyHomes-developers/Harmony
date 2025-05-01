"use client";
import { useState, useEffect } from 'react';
import { propertyData } from '../../data/properties';
import { StatusFilter, SortOrder } from './types';
import { PropertyCard } from './PropertyCard';
import { ResponsiveFilterBar } from './ResponsiveFilterBar';
import { Pagination } from './pagination';
import { formatPrice } from '../utils/formatters';

export const Catalogue = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000000]);
  const [sizeRange, setSizeRange] = useState<[number, number]>([0, 4000]);
  const [bedroomFilter, setBedroomFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  const propertiesPerPage = 6;

  // Generate suggestions
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const titleSuggestions = propertyData
        .filter(property => 
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.type.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(property => property.title);
      
      const addressSuggestions = propertyData
        .filter(property => 
          property.address.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(property => property.address);
      
      const typeSuggestions = [...new Set(
        propertyData
          .filter(property => 
            property.type.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(property => property.type)
      )].map(type => `${type.charAt(0).toUpperCase() + type.slice(1)} Properties`);
      
      const combinedSuggestions = [...new Set([...titleSuggestions, ...addressSuggestions, ...typeSuggestions])];
      setSuggestions(combinedSuggestions.slice(0, 5));
      setShowSuggestions(combinedSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Filter and sort properties
  const filteredProperties = propertyData.filter(property => {
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.address.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !property.type.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !(`${property.type} properties`).toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (statusFilter !== 'all' && property.status !== statusFilter) return false;
    if (typeFilter !== 'all' && property.type !== typeFilter) return false;
    if (property.price < priceRange[0] || property.price > priceRange[1]) return false;
    if (property.size < sizeRange[0] || property.size > sizeRange[1]) return false;
    if (bedroomFilter && property.beds !== parseInt(bedroomFilter)) return false;
    
    return true;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch(sortOrder) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'size-low': return a.size - b.size;
      case 'size-high': return b.size - a.size;
      default: return b.id - a.id;
    }
  });

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);

  // Helper functions
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 3000000]);
    setSizeRange([0, 4000]);
    setBedroomFilter('');
    setStatusFilter('all');
    setTypeFilter('all');
    setSortOrder('newest');
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Properties</h1>
        <p className="text-gray-600 mb-6">Browse our selection of properties available for sale and rent</p>
        
        {/* Search and Filter Controls - UPDATED */}
        <div className="mb-8">
          <ResponsiveFilterBar
            // Search props
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            suggestions={suggestions}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            handleSelectSuggestion={handleSelectSuggestion}
            clearSearch={clearSearch}
            
            // Filter props
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sizeRange={sizeRange}
            setSizeRange={setSizeRange}
            bedroomFilter={bedroomFilter}
            setBedroomFilter={setBedroomFilter}
            resetFilters={resetFilters}
            filtersVisible={filtersVisible}
            setFiltersVisible={setFiltersVisible}
          />
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {/* Empty State */}
        {currentProperties.length === 0 && (
          <div className="bg-white rounded-md p-8 text-center shadow-sm border border-gray-200">
            <p className="text-gray-600 mb-2">No properties match your current filters</p>
            <button 
              className="text-blue-600 hover:text-blue-800 font-medium"
              onClick={resetFilters}
            >
              Reset all filters
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">© 2025 Harmony. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};