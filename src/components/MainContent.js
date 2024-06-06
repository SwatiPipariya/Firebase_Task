import React from 'react';
import './MainContent.css';
import gir from "../Assets/pexels-ali-pazani-2613260.png"
import ban from "../Assets/pexels-humphrey-muleba-2045248.png"
import gian from "../Assets/pexels-imad-clicks-9810659.png"
import bamg from "../Assets/pexels-tobias-bjørkli-2236382.png"
import Hrt from "../Assets/heartb.png"
import Share from "../Assets/share.png"
import Comm from "../Assets/comment.png"
import Carousel from './Carousel';

const MainContent = () => {
  return (
    <div className="MainContent">
      <div className="post">
        <div className="post-header">
          <img src={gir} alt="avatar" />
          <div>
            <strong>Lara Leones</strong> <br />
            <p style={{ color: '#8D8D8D', margin: '0px' }}> @thewallart </p>
          </div>
        </div>
        <p className='iwnc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <a href="#" style={{color: "#FF5E8A", textDecoration: "none"}}>Read More</a></p>
        <img src={ban} alt="post" />
        <div className="post-footer">
          <span className='iwpqk'>
            <img src={Hrt} alt='heart' />
            <p className='pwljk'>9.8k</p>
            </span>
            <span className='iwpqk'>
            <img src={Comm} alt='Comment' />
            <p className='pwljk'>8.6k</p>
            </span>
            <span className='iwpqk'>
            <img src={Share} alt='heart' />
            <p className='pwljk'>7.2k</p>
            </span>
        </div>
      </div>
      <div className="post">
        <div className="post-header">
          <img src={gian} alt="avatar" />
          <div>
            <strong>Thomas J.</strong> <br />
            <p style={{ color: '#8D8D8D', margin: '0px' }}>@thecustomcreator</p>
            </div>
        </div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <a href="#" style={{color: "#FF5E8A", textDecoration: "none"}}>Read More</a></p>
        <img src={bamg} alt="post" />
        <div className="post-footer">
        <span className='iwpqk'>
            <img src={Hrt} alt='heart' />
            <p className='pwljk'>9.8k</p>
            </span>
            <span className='iwpqk'>
            <img src={Comm} alt='Comment' />
            <p className='pwljk'>8.6k</p>
            </span>
            <span className='iwpqk'>
            <img src={Share} alt='heart' />
            <p className='pwljk'>7.2k</p>
            </span>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default MainContent;
