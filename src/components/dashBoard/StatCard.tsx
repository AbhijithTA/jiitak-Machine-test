import React from 'react';
import { DashboardStat } from './types';
import { FiUsers, FiAward, FiSearch, FiTrash2 } from 'react-icons/fi';

const getIcon = (iconName: DashboardStat["icon"]) => {
  const iconMap = {
    users: <FiUsers className="w-4 h-4" />,
    award: <FiAward className="w-4 h-4" />,
    search: <FiSearch className="w-4 h-4" />,
    trash: <FiTrash2 className="w-4 h-4" />,
  };
  return iconMap[iconName] || <FiUsers className="w-4 h-4" />;
};


const StatCard: React.FC<{ stat: DashboardStat; isSmall?: boolean }> = ({ stat, isSmall = false }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-4 ${
      isSmall 
        ? 'w-full min-h-[182px] flex flex-col justify-between' 
        : 'w-full min-w-[276px] min-h-[182px] flex flex-col justify-between'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-700 mb-1 leading-tight">{stat.title}</h3>
          {stat.period && (
            <p className="text-xs text-gray-400 mb-2 leading-tight">{stat.period}</p>
          )}
        </div>
        <div className="text-gray-400 ml-2 flex-shrink-0">
          {getIcon(stat.icon)}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
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
    </div>
);

export default StatCard;