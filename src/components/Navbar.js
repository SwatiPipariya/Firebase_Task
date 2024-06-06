import React from 'react';
import './Navbar.css';
import Comp from "../Assets/Component 39 (2).png"
import Search from "../Assets/Component 32.png"

const Navbar = () => {
  return (
    <div className='oqmsk'>
    <div className="Navbar">
      <div className='lamcw'>
      <img src={Search} className="qlxsm" alt='Search' />
      <input  type="text" className='whqpc' style={{border:"none", outline:"none"}} placeholder="Search here..." />
      </div>
      <div className="filter-btn">
      <img src={Comp} alt='Search' />
      <p className='qmlw'>Filters</p>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
