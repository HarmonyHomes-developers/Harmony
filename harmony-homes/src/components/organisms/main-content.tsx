"use client"
import React, { useState } from 'react';
import { Award } from 'lucide-react';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  const tabs = ['Overview', 'Properties', 'Reviews', 'Statistics'];
  
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="mb-6">
      
        
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'border-gray-900 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'Overview' && (
        <div className="space-y-8">
          {/* About Description */}
          <div className='border border-gray-300  p-3 rounded-lg'>
              <h1 className="text-2xl font-semibold text-[#09090B] leading-6 mb-4">About Michael Rodriguez</h1>
            <p className="text-gray-600 leading-relaxed">
              Michael is a dedicated real estate professional with over 8 years of experience in the Miami luxury market. 
              He specializes in waterfront properties and has helped over 200 families find their dream homes. His deep 
              knowledge of the local market and commitment to client satisfaction has earned him recognition as a top 
              performer.
            </p>
          </div>

          {/* Specialties Section */}
          <div className='border border-gray-300  p-3 rounded-lg'>
            <h2 className="text-lg font-semibold mb-4 text-[#09090B]">Specialties</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border">
                Luxury Properties
              </span>
              <span className="px-4 py-2 border border-gray-300 text-gray-600 rounded-full text-sm">
                Waterfront Homes
              </span>
              <span className="px-4 py-2 border border-gray-300 text-gray-600 rounded-full text-sm">
                Investment Properties
              </span>
            </div>
          </div>

          {/* Languages Section */}
          <div className='border border-gray-300  p-3 rounded-lg'>
            <h2 className="text-lg font-semibold mb-4 text-[#09090B]">Languages</h2>
            <div className="flex gap-3">
              <span className="px-4 py-2 border border-gray-300 text-gray-600 rounded-full text-sm">
                English
              </span>
              <span className="px-4 py-2 border border-gray-300 text-gray-600 rounded-full text-sm">
                Spanish
              </span>
            </div>
          </div>

          {/* Achievements Section */}
          <div className='border border-gray-300  p-3 rounded-lg'>
            <h2 className="text-lg font-semibold mb-4 text-[#09090B]">Achievements</h2>
            <div className="space-y-3">
              {[
                'Top 1% Agent in Miami (2023)',
                'Luxury Property Specialist Certification',
                'Customer Service Excellence Award',
                'Blockchain Real Estate Pioneer',
              ].map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <Award className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab === 'Properties' && (
        <div className="p-8 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-500">Properties content goes here.</p>
        </div>
      )}
      {activeTab === 'Reviews' && (
        <div className="p-8 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-500">Reviews content goes here.</p>
        </div>
      )}
      {activeTab === 'Statistics' && (
        <div className="p-8 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-500">Statistics content goes here.</p>
        </div>
      )}
    </div>
  );
};

export default MainContent