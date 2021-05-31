import React from 'react';
import './styles/palette.css';

const Palette = ({ setCurrentColor, currentColor, setCurrentText, currentText }) => {
  return (
    <div className="pallet">
      <button className="refresh" onClick={() => window.location.reload()}>🔄</button>
      <div style={{ backgroundColor: currentColor }} className="currentColor"></div>
      <input type="color" id="color-picker" name="color-picker" />
      <div onClick={() => setCurrentColor('red')} className="color red"></div>

      <div onClick={() => setCurrentColor('orange')} className="color orange"></div>
      <div onClick={() => setCurrentColor('yellow')} className="color yellow"></div>
      <div onClick={() => setCurrentColor('green')} className="color green"></div>
      <div onClick={() => setCurrentColor('blue')} className="color blue"></div>
      <div onClick={() => setCurrentColor('purple')} className="color purple"></div>
      <div onClick={() => setCurrentColor('pink')} className="color pink"></div>
      <div onClick={() => setCurrentColor('brown')} className="color brown"></div>
      <div onClick={() => setCurrentColor('black')} className="color black"></div>
      <div onClick={() => setCurrentColor('white')} className="color white"></div>
      <input id="drawText" type="text" onChange={(e) => setCurrentText(e.target.value)} value={currentText} />
    </div>
  );
}

export default Palette;
