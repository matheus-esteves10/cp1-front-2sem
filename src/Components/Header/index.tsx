import React from 'react';
import Vector from '../../assets/img/Vector.png';
import lupa from '../../assets/img/lupa.png';
import './style.css';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <img src={Vector} alt="Logo" />
      </div>
      <div className='menu'> 
        
        <label className='toggle'>
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
        </label>
        <p>MENU</p>
      </div>
        <div className="search-bar">
        <img className='lupa' src={lupa} alt="lupa" />
        <input type="text" placeholder="Search" />
    </div>
      <div>
        <button className='login'>LOGIN</button>
      </div>
    </header>
  );
};

export default Header;