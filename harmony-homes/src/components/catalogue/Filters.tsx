"use client";
import { Funnel, } from 'lucide-react';
import { StatusFilter, SortOrder,  } from './types';
import { formatPrice } from '../utils/formatters';

interface FiltersProps {
  statusFilter: StatusFilter;
  setStatusFilter: (filter: StatusFilter) => void;
  typeFilter: string;
  setTypeFilter: (filter: string) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sizeRange: [number, number];
  setSizeRange: (range: [number, number]) => void;
  bedroomFilter: string;
  setBedroomFilter: (filter: string) => void;
  resetFilters: () => void;
  filtersVisible: boolean;
  setFiltersVisible: (visible: boolean) => void;
}

export const Filters = ({
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  sortOrder,
  setSortOrder,
  priceRange,
  setPriceRange,
  sizeRange,
  setSizeRange,
  bedroomFilter,
  setBedroomFilter,
  resetFilters,
  filtersVisible,
  setFiltersVisible
}: FiltersProps) => {
  return (
    <>
      <button 
        className="inline-flex items-center p-2 w-20 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
        onClick={() => setFiltersVisible(!filtersVisible)}
      >
        <Funnel  className="mr-1 h-5 w-5" />
        Filters
      </button>
      
      <div className="relative">
        <select
          className="block w-full pl-3 pr-10 py-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
          <option value="penthouse">Penthouse</option>
          <option value="loft">Loft</option>
        </select>
        {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className=" text-gray-400" />
        </div> */}
      </div>
      
      <div className="relative">
        <select
          className="block w-full pl-3 pr-10 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm focus:ring-blue-500 focus:border-blue-500"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
        >
          <option value="all">All Status</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div> */}
      </div>
      
      <div className="relative">
        <select
          className="block w-full pl-3 pr-10 py-3 text-sm border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="size-low">Size: Small to Large</option>
          <option value="size-high">Size: Large to Small</option>
        </select>
        {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div> */}
      </div>
      
      {/* Advanced Filters Panel */}
      {filtersVisible && (
        <div className="bg-white p-6 rounded-md shadow-sm mb-8 border border-gray-200 col-span-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Advanced Filters</h2>
            <button 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              onClick={resetFilters}
            >
              Reset filters
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Buy/Rent Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Status</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-600"
                    name="status"
                    value="all"
                    checked={statusFilter === 'all'}
                    onChange={() => setStatusFilter('all')}
                  />
                  <span className="ml-2 text-gray-700">All</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-600"
                    name="status"
                    value="sale"
                    checked={statusFilter === 'sale'}
                    onChange={() => setStatusFilter('sale')}
                  />
                  <span className="ml-2 text-gray-700">Buy</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-600"
                    name="status"
                    value="rent"
                    checked={statusFilter === 'rent'}
                    onChange={() => setStatusFilter('rent')}
                  />
                  <span className="ml-2 text-gray-700">Rent</span>
                </label>
              </div>
            </div>
            
            {/* Price Range Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${formatPrice(priceRange[0])} - ${formatPrice(priceRange[1])}
              </label>
              <input
                type="range"
                min="0"
                max="3000000"
                step="50000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            {/* Size Range Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size Range: {sizeRange[0]} - {sizeRange[1]} sq ft
              </label>
              <input
                type="range"
                min="0"
                max="4000"
                step="100"
                value={sizeRange[1]}
                onChange={(e) => setSizeRange([sizeRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            {/* Bedrooms Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={bedroomFilter}
                onChange={(e) => setBedroomFilter(e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};