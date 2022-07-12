import React, { useState } from 'react';
import Canvas from './canvas';
import Drawer from './drawer';
import { randomizer, colorArray, colorMap } from './util';

const Root = () => {
  const randomIndex = randomizer(colorArray.length)
  const randomHex = Object.values(colorMap)[randomIndex]
  const [currentColor, setCurrentColor] = useState(randomHex)
  const [darkMode, setDarkMode] = useState(false)
  const [zanyMode, setZanyMode] = useState(false)


  return (
    <React.Fragment>
      <Drawer setCurrentColor={setCurrentColor} currentColor={currentColor} setDarkMode={setDarkMode} zanyMode={zanyMode} setZanyMode={setZanyMode} darkMode={darkMode} />
      <Canvas darkMode={darkMode} zanyMode={zanyMode} currentColor={currentColor} />
    </React.Fragment>
  )
}

export default Root;
