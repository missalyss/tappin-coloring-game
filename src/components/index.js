import React, { useState } from 'react';
import Palette from './palette';
import Canvas from './canvas';

const Root = () => {
  const [currentColor, setCurrentColor] = useState('#000000')
  return (
    <React.Fragment>
      <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} />
      <Canvas currentColor={currentColor} />
    </React.Fragment>
  )
}

export default Root;
