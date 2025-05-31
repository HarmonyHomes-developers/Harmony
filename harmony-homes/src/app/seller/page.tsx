import React from 'react';
import Sidebar from '@/components/seller/sidebar';
import MainContent from '@/components/seller/MainContent';
import Header from '@/components/organisms/navbar';

const SellerDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <Header/>
      <div className=" mx-auto p-6 md:px-28">
        <button className="flex items-center text-gray-600 mb-6 hover:text-gray-800 transition-colors">
          <span className="mr-2">←</span>
          Back to Properties
        </button>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default SellerDetailPage;