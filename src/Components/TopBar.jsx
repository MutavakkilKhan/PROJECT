import React from 'react';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Dashboard Interface</h1>
      <div className="relative">
        <button className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-blue-500 focus:outline-none">
          <i className="icon-bell"></i>
        </button>
        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default TopBar;
