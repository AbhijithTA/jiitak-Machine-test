"use client";

import React, { useState } from 'react';
import { FiLogOut, FiUser, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  showAvatar?: boolean;
}

const NavbarComponent: React.FC<NavbarProps> = ({ showAvatar = true }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
      
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/logo.png" 
              alt="Logo"
              width={188}
              height={30.06}
              priority
              style={{ width: "188px", height: "30.06px" }}
            />
          </Link>
        </div>

       
        {showAvatar && (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">ユ</span>
              </div>
              <FiChevronDown
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <Link
                    href="/account"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FiUser className="w-4 h-4 mr-3" />
                    アカウント
                  </Link>
                  <Link
                    href="/login"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FiLogOut className="w-4 h-4 mr-3" />
                    ログアウト
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarComponent;
