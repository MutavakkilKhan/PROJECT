import React from 'react';

const OverviewCard = ({ title, value, date, change }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-500">{title}</p>
        <span className={`text-sm font-bold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change}%
        </span>
      </div>
      <div className="text-2xl font-bold text-blue-600">{value}</div>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
};

export default OverviewCard;
