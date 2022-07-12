import React from 'react';
import './styles/palette.css';
import '../pattern-lib/colors.css'
import { colorMap } from './util';

const Palette = ({ className, setCurrentColor, currentColor, setDarkMode, darkMode, setZanyMode, zanyMode }) => {
  console.log('zany: ', zanyMode);
  return (
    <div className={`${className ?? ''} pallet`}>
      <button className="button" onClick={() => window.location.reload()}>🗑</button>

      {/* <div style={{ backgroundColor: currentColor }} className="currentColor"></div> */}
      <div onClick={() => setCurrentColor(colorMap.red)} className="swatch bg-red"></div>
      <div onClick={() => setCurrentColor(colorMap.orange)} className="swatch bg-orange"></div>
      <div onClick={() => setCurrentColor(colorMap.yellow)} className="swatch bg-yellow"></div>
      <div onClick={() => setCurrentColor(colorMap.green)} className="swatch bg-green"></div>
      <div onClick={() => setCurrentColor(colorMap.blue)} className="swatch bg-blue"></div>
      <div onClick={() => setCurrentColor(colorMap.purple)} className="swatch bg-purple"></div>
      <div onClick={() => setCurrentColor(colorMap.pink)} className="swatch bg-pink"></div>
      <div onClick={() => setCurrentColor(colorMap.white)} className="swatch bg-white"></div>
      {/* <div onClick={() => setCurrentColor(colorMap.black)} className="swatch bg-black"></div> */}
      <button className="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? '☀️' : '🌙'}</button>
      <button className={`button ${zanyMode ? 'highlight' : ''}`} onClick={() => setZanyMode(!zanyMode)}>🤪</button>

      {/* <input type="color" id="color-picker" name="color-picker" /> */}
      {/* <div onClick={() => setCurrentColor('brown')} className="swatch bg-brown"></div> */}
      {/* <input id="drawText" className="drawText" type="text" onChange={(e) => setCurrentText(e.target.value)} value={currentText} /> */}
    </div>
  );
}

export default Palette;
