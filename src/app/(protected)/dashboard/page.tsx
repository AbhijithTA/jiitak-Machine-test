"use client"

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FiUsers, FiUserCheck, FiAward, FiSearch, FiTrash2, FiUser, FiLogOut, FiChevronDown } from 'react-icons/fi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const chartData = {
    labels: ['10代未満', '10代', '20代', '30代', '40代', '50代', '60代', '70代', '80代', '90代以上'],
    datasets: [
      {
        label: '男性',
        data: [200, 350, 650, 750, 850, 650, 400, 250, 150, 75],
        backgroundColor: '#FF8C00',
        borderRadius: 0,
        categoryPercentage: 0.8,
        barPercentage: 1.0,
      },
      {
        label: '女性',
        data: [150, 250, 500, 600, 700, 500, 300, 150, 100, 50],
        backgroundColor: '#FFB347',
        borderRadius: 0,
        categoryPercentage: 0.8,
        barPercentage: 1.0,
      },
      {
        label: 'その他',
        data: [20, 30, 80, 100, 120, 80, 50, 30, 20, 15],
        backgroundColor: '#FFCC80',
        borderRadius: 0,
        categoryPercentage: 0.8,
        barPercentage: 1.0,
      },
      {
        label: '回答なし',
        data: [10, 20, 50, 60, 70, 50, 30, 20, 10, 8],
        backgroundColor: '#FFE0B2',
        borderRadius: 0,
        categoryPercentage: 0.8,
        barPercentage: 1.0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 1000,
        ticks: {
          stepSize: 100,
          font: {
            size: 11,
          },
        },
        grid: {
          color: '#E5E7EB',
        },
      },
    },
    interaction: {
      intersect: false,
    },
  };

  const statsData = [
    {
      title: 'ユーザー登録数累計',
      period: '',
      value: '450',
      unit: '人',
      subValue: '400人 (前月時点の累計)',
      change: '+12.5%',
      changeType: 'up',
      icon: <FiUsers className="w-4 h-4" />,
    },
    {
      title: 'アクティブユーザー',
      period: '2024年2月1日 - 2024年2月5日',
      value: '50',
      unit: '人/今月',
      subValue: '12人 (前月時点)',
      change: '+316.6%',
      changeType: 'up',
      icon: <FiUsers className="w-4 h-4" />,
    },
    {
      title: '定着率',
      period: '2024年1月1日 - 2024年1月31日',
      value: '10',
      unit: '%/前月',
      subValue: '12% (前々月)',
      change: '-16.6%',
      changeType: 'down',
      icon: <FiAward className="w-4 h-4" />,
    },
    {
      title: '平均検索回数',
      period: '2024年2月1日 - 2024年2月5日',
      value: '4',
      unit: '回/今月',
      subValue: '2回 (前月の今日時点)',
      change: '+100%',
      changeType: 'up',
      icon: <FiSearch className="w-4 h-4" />,
    },
    {
      title: '抽選利用回数',
      period: '2024年2月1日 - 2024年2月5日',
      value: '125',
      unit: '回/今月',
      subValue: '85回 (前月の今日時点)',
      change: '+47%',
      changeType: 'up',
      icon: <FiAward className="w-4 h-4" />,
    },
    {
      title: 'アカウント削除数',
      period: '2024年2月1日 - 2024年2月5日',
      value: '10',
      unit: '人/今月',
      subValue: '8人 (前月の今日時点)',
      change: '+25%',
      changeType: 'up',
      icon: <FiTrash2 className="w-4 h-4" />,
    },
  ];

  const StatCard = ({ stat, isSmall = false }) => (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-4 ${
      isSmall ? 'h-auto' : 'h-full'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-700 mb-1">{stat.title}</h3>
          {stat.period && (
            <p className="text-xs text-gray-400 mb-2">{stat.period}</p>
          )}
        </div>
        <div className="text-gray-400 ml-2">
          {stat.icon}
        </div>
      </div>
      
      <div className="flex items-baseline mb-2">
        <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
        <span className="text-sm text-gray-600 ml-1">{stat.unit}</span>
      </div>
      
      <div className="text-xs text-gray-500 mb-1">{stat.subValue}</div>
      
      <div className={`text-xs font-semibold ${
        stat.changeType === 'up' ? 'text-green-500' : 'text-red-500'
      }`}>
        {stat.change}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-end">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">N</span>
              </div>
              <FiChevronDown className="w-4 h-4" />
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiUser className="w-4 h-4 mr-3" />
                    マイアカウント
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="w-4 h-4 mr-3" />
                    ログアウト
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 flex-shrink-0">
          <div className="p-4">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-orange-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs">🔍</span>
              </div>
              <h1 className="text-lg font-bold text-orange-500">ルックミール</h1>
            </div>
          </div>
          
          <nav className="mt-4">
            <ul className="space-y-1">
              <li>
                <div className="flex items-center px-4 py-3 text-orange-600 bg-orange-50 border-r-2 border-orange-500">
                  <span className="mr-3">📊</span>
                  <span className="font-medium">ダッシュボード</span>
                </div>
              </li>
              <li>
                <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer">
                  <span className="mr-3">👤</span>
                  <span>登録ユーザー</span>
                </div>
              </li>
              <li>
                <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer">
                  <span className="mr-3">🎯</span>
                  <span>当選者</span>
                </div>
              </li>
              <li>
                <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer">
                  <span className="mr-3">🛠</span>
                  <span>運営管理者</span>
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <div className="max-w-full">
            {/* Top Row - 4 Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
              {statsData.slice(0, 4).map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>

            {/* Bottom Row - Chart and 2 Stats */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {/* Chart Section - Takes 3/4 of the width */}
              <div className="xl:col-span-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium text-gray-800">性別・年代比</h2>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">2024年</span>
                      <select className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>01月</option>
                        <option>02月</option>
                        <option>03月</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-80">
                    <Bar data={chartData} options={chartOptions} />
                  </div>
                </div>
              </div>

              {/* Right Column - 2 Stats Cards stacked */}
              <div className="xl:col-span-1 space-y-6">
                {statsData.slice(4).map((stat, index) => (
                  <StatCard key={index + 4} stat={stat} isSmall={true} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;