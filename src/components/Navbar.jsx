import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">🔔</button>
        <button className="p-2">💬</button>
        <button className="p-2">❤️</button>
        <div className="flex items-center space-x-2">
          <img src="/profile.png" alt="Profile" className="h-8 w-8 rounded-full" />
          <span>Username</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;