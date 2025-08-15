"use client";

import React from 'react';
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
import { dashboardStats, chartData } from './constants';
import StatCard from './StatCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardStats = () => {
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
          font: { size: 12 },
        },
      },
      tooltip: { mode: 'index' as const, intersect: false },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 1000,
        ticks: { stepSize: 100, font: { size: 11 } },
        grid: { color: '#E5E7EB' },
      },
    },
  };

  return (
    <div className="w-full max-w-none">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {dashboardStats.slice(0, 4).map((stat, index) => (
          <div key={index} className="w-full max-w-[276px]">
            <StatCard stat={stat} />
          </div>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 max-w-none xl:max-w-[calc(100%-300px)]">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 w-full min-w-[568px] min-h-[375px]">
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
            <div className="h-72">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[276px] flex flex-col gap-4">
          {dashboardStats.slice(4).map((stat, index) => (
            <StatCard key={index + 4} stat={stat} isSmall={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;