"use client";

import React, { useState, useMemo } from 'react';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { usersData } from './constants';
import TruncatedText from './TruncatedText';

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  const itemsPerPage = 10;
  const totalItems = 5000; 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Filtering user based on the search
  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) return usersData;
    
    const term = searchTerm.toLowerCase();
    return usersData.filter(user => 
      user.nickname.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // Pagination logic
  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, filteredUsers]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">登録ユーザー一覧</h2>
            <div className="flex items-center space-x-2">
              <FiSearch className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="ニックネーム/メールアドレスで検索"
                value={searchTerm}
                onChange={handleSearch}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-16 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">No.</th>
                <th className="w-32 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ニックネーム</th>
                <th className="w-48 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">メールアドレス</th>
                <th className="w-20 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">生年月</th>
                <th className="w-20 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">性別</th>
                <th className="w-20 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">居住地</th>
                <th className="w-24 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">登録日</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="w-16 px-4 py-3 text-sm text-gray-900">
                      {String(index + 1 + (currentPage - 1) * itemsPerPage).padStart(2, '0')}.
                    </td>
                    <td className="w-32 px-4 py-3 text-sm text-gray-900">
                      <TruncatedText 
                        text={user.nickname} 
                        maxWidth="128px" 
                        cellKey={`nickname-${user.id}`} 
                      />
                    </td>
                    <td className="w-48 px-4 py-3 text-sm text-gray-900">
                      <TruncatedText 
                        text={user.email} 
                        maxWidth="192px" 
                        cellKey={`email-${user.id}`} 
                      />
                    </td>
                    <td className="w-20 px-4 py-3 text-sm text-gray-900">
                      {user.birthYear} {user.birthMonth}
                    </td>
                    <td className="w-20 px-4 py-3 text-sm text-gray-900">{user.gender}</td>
                    <td className="w-20 px-4 py-3 text-sm text-gray-900">{user.location}</td>
                    <td className="w-24 px-4 py-3 text-sm text-gray-900">{user.registrationDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                    該当するユーザーが見つかりませんでした
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              {filteredUsers.length}人中 - {paginatedUsers.length}人表示
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              
              {Array.from({ length: Math.min(5, Math.ceil(filteredUsers.length / itemsPerPage)) }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 text-sm rounded ${
                    currentPage === page
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              {Math.ceil(filteredUsers.length / itemsPerPage) > 5 && (
                <>
                  <span className="text-gray-400">...</span>
                  <button
                    onClick={() => setCurrentPage(Math.ceil(filteredUsers.length / itemsPerPage))}
                    className={`px-3 py-1 text-sm rounded ${
                      currentPage === Math.ceil(filteredUsers.length / itemsPerPage)
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {Math.ceil(filteredUsers.length / itemsPerPage)}
                  </button>
                </>
              )}
              
              <button
                onClick={() => setCurrentPage(Math.min(Math.ceil(filteredUsers.length / itemsPerPage), currentPage + 1))}
                disabled={currentPage === Math.ceil(filteredUsers.length / itemsPerPage) || filteredUsers.length === 0}
                className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;