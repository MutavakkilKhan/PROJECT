import React from 'react';

const DeviceCategory = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Device Category</h2>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span>Mobile</span>
          <span className="font-bold text-blue-600">96.42%</span>
        </li>
        <li className="flex justify-between">
          <span>Desktop</span>
          <span className="font-bold text-blue-600">2.76%</span>
        </li>
        <li className="flex justify-between">
          <span>Tablet</span>
          <span className="font-bold text-blue-600">0.82%</span>
        </li>
      </ul>
    </div>
  );
};

export default DeviceCategory;
