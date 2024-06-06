// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Heart from "../Assets/heart.png"
import Home from "../Assets/home.png"
import Not from "../Assets/notification.png"
import Mess from "../Assets/message.png"
import Wall from "../Assets/wallet.png"
import Fav from "../Assets/favorite.png"
import Pro from "../Assets/profile.png"
import Sett from "../Assets/setting.png"
import Log from "../Assets/logout.png"

const Sidebar = ({ handleLogout }) => {
  return (
    <div className="Sidebar">
      <div className='fvf5'>
        <div className="logo">LOGO</div>
      </div>
      <div className='uens' style={{paddingLeft: "20%"}}>
        <ul>
          <li className='rfsef'>
            <Link to="/" className='jwxh'>   
              <img src={Home} alt='Home' />           
              <p style={{paddingLeft: "20px", color: "black"}} className='qiks'>Home</p>
            </Link>
          </li>
          <li className='rfsef'>
            <Link to="/notifications" className='jwxh'>
              <img src={Not} alt='Notifications' />
              <p style={{paddingLeft: "20px"}} className='qiks'>Notifications</p>
            </Link>
          </li>
          <li className='rfsef'>
            <Link to="/shop"  className='jwxh'>
             <img src={Heart} alt='Shopping' />
              <p style={{paddingLeft: "20px"}} className='qiks'>Shop</p>
            </Link>
          </li>
          <li className='rfsef'>
            <Link to="/conversation" className='jwxh'>
             <img src={Mess} alt='Conversation' />             
              <p style={{paddingLeft: "20px"}} className='qiks'>Conversation</p>
            </Link>
          </li>
          <li className='rfsef' >
            <Link to="/wallet" className='jwxh'>
              <img src={Wall} alt='Wallet' />
              <p style={{paddingLeft: "20px"}}  className='qiks'>Wallet</p>
            </Link>
          </li>
          <li className='rfsef'>
            <Link to="/subscription" className='jwxh'>
              <img src={Fav} alt='Subscription' />
              <p style={{paddingLeft: "20px"}}  className='qiks'>Subscription</p>
            </Link>
          </li>
          <li className='rfsef'>
            <Link to="/Login" className='jwxh'>
              <img src={Pro} alt='Profile' />
              <p style={{paddingLeft: "20px"}}  className='qiks'>My Profile</p>
            </Link>
          </li>
          <li className='rfsef'>
            <Link to="/Login" className='jwxh'>
              <img src={Sett} alt='Settings' />
              <p style={{paddingLeft: "20px"}}  className='qiks'>Settings</p>
            </Link>
          </li>
        </ul>
        <div className='wjsnd'>
          <img src={Log} alt='Logout' />
        <button onClick={handleLogout} className='iqmck' style={{paddingLeft: "20px", paddingBottom:"6px"}}>Logout</button>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
