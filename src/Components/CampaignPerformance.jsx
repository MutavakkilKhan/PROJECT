import React from 'react';

const CampaignPerformance = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Campaign Performance</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th>Campaign</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>CPC</th>
            <th>Spend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Ads</td>
            <td>189k</td>
            <td>9k</td>
            <td>$8.12</td>
            <td>$56,123.12</td>
          </tr>
          <tr>
            <td>TikTok</td>
            <td>287k</td>
            <td>15k</td>
            <td>$12.12</td>
            <td>$40,123.12</td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>156k</td>
            <td>12k</td>
            <td>$5.12</td>
            <td>$39,123.12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CampaignPerformance;
