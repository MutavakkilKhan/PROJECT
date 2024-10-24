import React from 'react';
import Sidebar from './Components/sidebar.jsx';
import TopBar from './components/TopBar.jsx';
import OverviewCard from './components/OverviewCard.jsx';
import ReportUpload from './Components/Report.jsx';
import DeviceCategory from './components/DeviceCategory.jsx';
import CampaignPerformance from './components/CampaignPerformance.jsx';
import TopCountries from './components/TopCountries.jsx';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-8 space-y-6">
        <TopBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewCard title="Available to Withdraw" value="$1,567.99" date="Wed, Jul 20" change={10.05} />
          <OverviewCard title="Today Revenue" value="$2,868.99" date="143 Orders" change={-3.0} />
          <OverviewCard title="Today Sessions" value="156k" date="32k Visitors" change={3.2} />
          <OverviewCard title="Leads" value="3,422" date="$34.28 Average Order" change={1.8} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <ReportUpload/>   
          <DeviceCategory />
          
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CampaignPerformance />
          <TopCountries />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
