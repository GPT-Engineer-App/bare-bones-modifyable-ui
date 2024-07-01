import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-64 p-4 bg-gray-100">
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">User Profile</h2>
        <div className="p-4 bg-white shadow-md rounded-md">
          <img src="/profile.png" alt="Profile" className="h-16 w-16 rounded-full mx-auto" />
          <h3 className="mt-4 text-center text-lg font-semibold">Kemito</h3>
          <p className="text-center text-sm text-gray-500">UI/UX Designer</p>
          <div className="mt-4 flex justify-between">
            <div className="text-center">
              <h4 className="text-lg font-semibold">11K</h4>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold">1.4K</h4>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold">Latest Activity</h2>
        <div className="p-4 bg-white shadow-md rounded-md">
          <p>arizidanrio, kurniamdj, and 78 others liked your post - 5m</p>
          <p>uibucket tagged you in post comment: @kemito this design is beautiful! - 10m</p>
          <p>Jelly started following you - 12m</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;