import React from 'react';

const TopCountries = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Top Countries</h2>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span>United States</span>
          <span className="font-bold text-blue-600">48%</span>
        </li>
        <li className="flex justify-between">
          <span>United Kingdom</span>
          <span className="font-bold text-blue-600">12%</span>
        </li>
        <li className="flex justify-between">
          <span>Switzerland</span>
          <span className="font-bold text-blue-600">9%</span>
        </li>
      </ul>
    </div>
  );
};

export default TopCountries;
