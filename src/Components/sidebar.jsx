import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-6">
      <div className="text-3xl font-bold mb-8">EZY</div>
      <ul className="space-y-4">
        <li className="text-blue-500 font-semibold flex items-center">
          <i className="icon-dashboard mr-3"></i>
          Dashboard
        </li>
        <li className="text-gray-600 hover:text-blue-500 flex items-center">
          <i className="icon-campaign mr-3"></i>
          Campaign
        </li>
        <li className="text-gray-600 hover:text-blue-500 flex items-center">
          <i className="icon-leads mr-3"></i>
          Leads
        </li>
        <li className="text-gray-600 hover:text-blue-500 flex items-center">
          <i className="icon-report mr-3"></i>
          Report
        </li>
        <li className="text-gray-600 hover:text-blue-500 flex items-center">
          <i className="icon-analytics mr-3"></i>
          Analytics
        </li>
        <li className="text-gray-600 hover:text-blue-500 flex items-center">
          <i className="icon-profile mr-3"></i>
          Profile
        </li>
        <li className="text-gray-600 hover:text-blue-500 flex items-center">
          <i className="icon-settings mr-3"></i>
          Setting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
