import React, { useState } from 'react';
import Palette from './palette';
import Canvas from './canvas';

const Root = () => {
  const [currentColor, setCurrentColor] = useState('#000000')
  const [currentText, setCurrentText] = useState('😉')

  return (
    <React.Fragment>
      <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} setCurrentText={setCurrentText} currentText={currentText} />
      <Canvas currentText={currentText} currentColor={currentColor} />
    </React.Fragment>
  )
}

export default Root;
