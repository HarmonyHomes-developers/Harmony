
import { Star, Phone, Mail, MessageSquare, Award, MapPin, CheckCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-full md:w-80 space-y-6">
      {/* Profile Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-4xl text-gray-400">👤</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl font-semibold text-gray-900">Michael Rodriguez</h1>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Verified</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-2">Premium Property Specialist</p>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Miami, FL</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              {[...Array(1)].map((_, i) => (
                <Star key={i + 4} className="w-4 h-4 text-yellow-400 fill-current opacity-50" />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">4.8</span>
            <span className="text-gray-500 text-sm ml-1">(156 reviews)</span>
          </div>
          
          <div className="w-full space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Message
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                <Phone className="w-4 h-4 mr-1" />
                Call
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Quick Stats</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Member Since</span>
            <span className="font-semibold text-gray-900">2020</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Properties Sold</span>
            <span className="font-semibold text-gray-900">47</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Total Sales</span>
            <span className="font-semibold text-gray-900">$12.5M</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Response Time</span>
            <span className="font-semibold text-gray-900">&lt; 1 hour</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar
