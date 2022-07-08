import React, { useState } from 'react';
import Palette from './palette';
import Canvas from './canvas';
import { randomizer, colorArray, colorMap } from './util';

const Root = () => {
  const randomIndex = randomizer(colorArray.length)
  const randomHex = Object.values(colorMap)[randomIndex]
  const [currentColor, setCurrentColor] = useState(randomHex)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <React.Fragment>
      <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} setDarkMode={setDarkMode} darkMode={darkMode} />
      <Canvas darkMode={darkMode} currentColor={currentColor} />
    </React.Fragment>
  )
}

export default Root;
