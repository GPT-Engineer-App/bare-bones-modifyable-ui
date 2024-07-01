import React from 'react';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSidebar';

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;