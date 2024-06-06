import React from 'react';
import './RightSidebar.css';
import fir from "../Assets/pexels-ekaterina-12203460.png"
import anas from "../Assets/pexels-anastasia-shuraeva-4406721.png"
import Gen from "../Assets/pexels-genaro-servín-763210.png"
import And from "../Assets/pexels-andrea-piacquadio-3771118.png"
import men from "../Assets/pexels-pixabay-164455.png"
import sma from "../Assets/pexels-antoni-shkraba-4442102.png"
import fiona from "../Assets/pexels-fiona-art-5022849.png"

const RightSidebar = () => {
  return (
    <div className="RightSidebar">
      <div className='wodba'>
      <button className="seller-btn">Become a Seller</button>
      </div>

      <div className="tabs">
        <button className="active">Artists</button>
        <button>Photographers</button>
      </div>
      <div className="recommendations">
        <div className="recommendation">
          <img src={fir}  alt="recommendation" />
          <div className='ponb'>
            <img src={anas} alt='Profile' />
            <div className='langm'>
            <strong>Thomas Edward</strong> <br/>
            @thewildwithyou

            </div>
            
          </div>
        </div>
        <div className="recommendation">
          <img src={Gen} alt="recommendation" />
          <div className='ponb'>
            <img src={And} alt='Profile' />
            <div className='langm'>

            <strong>Chris Doe</strong> <br />
            @thewildwithyou
            </div>
          </div>
        </div>
        <div className="recommendation">
          <img src={men} alt="recommendation" />
          <div className='ponb'>
            <img src={sma} alt='Profile' />
            <div className='langm'>

            <strong>Emilie Jones</strong> <br />
            @thewildwithyou
            </div>
          </div>
        </div>
        <div className="recommendation">
          <img src={fiona} alt="recommendation" />
          <div className='ponb'>
          <img src={anas} alt='Profile' />
          <div className='langm'>

          <strong>Jessica Williams</strong> <br />
            @thewildwithyou
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
