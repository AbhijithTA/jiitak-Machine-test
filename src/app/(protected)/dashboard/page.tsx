"use client"

import React, { useState } from 'react';
import DashboardStats from '@/components/dashBoard/DashboardStats';
import UserList from '@/components/dashBoard/UserList';
import Sidebar from '@/components/dashBoard/Sidebar';

import NavbarComponent from '@/components/Navbar';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
   <NavbarComponent showAvatar={true} />
      
      <div className="flex flex-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6 overflow-x-auto">
          {activeTab === 'dashboard' && <DashboardStats />}
          {activeTab === 'users' && <UserList />}
          {(activeTab === 'winners' || activeTab === 'admin') && (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">この機能は開発中です</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;