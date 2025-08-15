"use client";

import React from 'react';
import { menuItems } from './constants';

const Sidebar = ({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void 
}) => {
  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 flex-shrink-0">

      
      <nav className="mt-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left ${
                  activeTab === item.id
                    ? 'text-orange-600 bg-orange-50 border-r-2 border-orange-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span className={activeTab === item.id ? 'font-medium' : ''}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;