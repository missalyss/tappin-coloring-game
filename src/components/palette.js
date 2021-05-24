import React from 'react';
// import headerImage from '../images/cherf.jpg'
import './styles/palette.css';

const Palette = () => {
  return (
    <div className="pallet">
      <div className="currentColor"></div>
      <input type="color" id="color-picker" name="color-picker" />
      <div className="color red"></div>
      <div className="color orange"></div>
      <div className="color yellow"></div>
      <div className="color green"></div>
      <div className="color blue"></div>
      <div className="color purple"></div>
      <div className="color pink"></div>
      <div className="color brown"></div>
      <div className="color black"></div>
      <div className="color white"></div>
    </div>
  );
}

export default Palette;
