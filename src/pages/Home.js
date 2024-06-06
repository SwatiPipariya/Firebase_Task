import React from 'react';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSidebar';
import '../App.css';

function Home() {
  return (
    <div className="App">
    
      <div className="Main">
        <Navbar />
        <MainContent />
      </div>
      <RightSidebar />
    </div>
  );
}

export default Home;
