import React from 'react';

const MainContent = () => {
  return (
    <div className="flex-1 p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">User Posts</h2>
        <div className="p-4 bg-white shadow-md rounded-md">
          <div className="flex items-center mb-4">
            <img src="/user.png" alt="User" className="h-8 w-8 rounded-full" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Alvin Elian</h3>
              <p className="text-sm text-gray-500">3 minutes ago</p>
            </div>
          </div>
          <p>This is my latest product kit for website landing page, dashboard, and mobile exploration about coffee shop called Kopiku.</p>
          <div className="mt-4 flex space-x-4">
            <button className="p-2">👍 70</button>
            <button className="p-2">💬 34</button>
            <button className="p-2">🔁 16</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;