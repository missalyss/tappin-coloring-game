import React, { useState } from 'react';
import Palette from './palette';
import Canvas from './canvas';
import { randomizer, colorArray, colorMap } from './util';

const Root = () => {
  const randomIndex = randomizer(colorArray.length)
  const randomHex = Object.values(colorMap)[randomIndex]
  const [currentColor, setCurrentColor] = useState(randomHex)
  const [currentText, setCurrentText] = useState('😉')
  return (
    <React.Fragment>
      <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} setCurrentText={setCurrentText} currentText={currentText} />
      <Canvas currentText={currentText} currentColor={currentColor} />
    </React.Fragment>
  )
}

export default Root;
