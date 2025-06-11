"use client"
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { ArrowLeft, Phone, Video, MoreVertical, Paperclip, Send, MapPin } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isAgent: boolean;
}

const ChatWindow = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'agent',
      text: "Hello! Thank you for your interest in this beautiful villa. I'd be happy to answer any questions you have.",
      time: '04:30 AM',
      isAgent: true
    },
    {
      id: 2,
      sender: 'user',
      text: "Hi Sarah! I'm very interested in this property. Could you tell me more about the neighborhood and nearby amenities?",
      time: '04:35 AM',
      isAgent: false
    },
    {
      id: 3,
      sender: 'agent',
      text: "This villa is located in one of Miami's most prestigious neighborhoods. You're just 5 minutes from the beach, and there are excellent restaurants, shopping centers, and top-rated schools nearby. The area is very safe and family-friendly.",
      time: '04:40 AM',
      isAgent: true
    },
    {
      id: 4,
      sender: 'user',
      text: "That sounds perfect! When would be a good time to schedule a viewing?",
      time: '04:45 AM',
      isAgent: false
    },
    {
      id: 5,
      sender: 'agent',
      text: "I have availability this weekend. Would Saturday at 2 PM or Sunday at 10 AM work better for you?",
      time: '04:50 AM',
      isAgent: true
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'user',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAgent: false
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      setTimeout(() => {
        const agentResponse: Message = {
          id: messages.length + 2,
          sender: 'agent',
          text: "Thank you for your message! I'll get back to you shortly with more details.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isAgent: true
        };
        setMessages(prev => [...prev, agentResponse]);
      }, 1500);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-4 lg:py-8">
        {/* Header */}
        <div className="px-4 lg:px-6 py-4 border-b border-[#E4E4E7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left side - Back button and Profile */}
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button className="flex items-center text-black hover:text-gray-800 px-4 py-2 border border-[#E4E4E7] hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Back to Property</span>
              <span className="sm:hidden">Back</span>
            </button>

            {/* Profile Info */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Sarah Johnson
                  <span className="inline-flex items-center ml-2 text-black bg-[#F4F4F5] rounded-[9999px] px-2 py-1 font-semibold text-xs">
                    online
                  </span>
                </h3>

                <p className="text-sm text-[#71717A]">
                  Real Estate Agent
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-[6px] border border-[#E4E4E7] transition-colors">
              <Phone className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-[6px] border border-[#E4E4E7] transition-colors">
              <Video className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-[6px] border border-[#E4E4E7] transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="overflow-hidden">
          {/* Top Section - Two Cards Side by Side */}
          <div className="flex flex-col lg:flex-row p-4 lg:p-6 space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Property Discussion Card */}
            <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Property Discussion</h3>
              </div>
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1">Luxury Villa with Pool</h4>
                    <p className="text-sm text-gray-600 flex items-center mb-2">
                      <span className="mr-1"><MapPin /> </span>
                      <span className="truncate">456 Ocean Ave, Miami, FL</span>
                    </p>
                    <p className="text-xl font-bold text-gray-900">$1,250,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Information Card */}
            <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-4 ">
                <h3 className="text-lg font-semibold text-gray-900">Seller Information</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                  {/* Profile Info */}
                  <div className="flex items-start space-x-4 mb-4 sm:mb-0 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-1">
                        <span className="font-semibold text-gray-900">Michael Rodriguez</span>
                        <span className="px-2 py-1 bg-gray-100 text-black text-xs font-bold rounded-full w-fit">
                          Verified
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Member since 2020</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-1 text-sm">
                        <span className="text-gray-600">12 properties sold</span>
                        <span className="hidden sm:inline text-gray-600">•</span>
                        <div className="flex items-center space-x-1">
                          <span className="w-4 h-4 text-gray-400">⭐</span>
                          <span className="font-medium">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View Profile Button - Now aligned with profile info */}
                  <div className="sm:self-center">
                    <button className="w-full sm:w-auto px-4 py-2  border border-[#E4E4E7] hover:bg-gray-200 rounded-[6px] text-sm font-bold transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Chat */}
          <div className="flex flex-col h-[50vh] lg:h-[400px]">
            {/* Chat Messages Container */}
  <div className="flex-1 overflow-y-auto scrollbar-hide p-4 lg:p-6 space-y-4 border border-[#E4E4E7] rounded-[8px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isAgent ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex items-end space-x-2 max-w-[90%] sm:max-w-md ${msg.isAgent ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    {msg.isAgent && (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                    )}
                    <div>
                      <div className={`px-4 py-3 rounded-2xl ${msg.isAgent
                        ? 'bg-white text-black rounded-[8px] border border-gray-200 w-full'
                        : 'bg-[#18181B] text-white rounded-[8px] w-full'
                        }`}>
                        <p className="font-normal text-[14px] leading-[20px] align-middle">{msg.text}</p>
                        <p className="text-xs text-[#71717A] mt-1 px-2 ">{msg.time}</p>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center space-x-3">
                <button type="button" className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  disabled={!message.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;