import React, { useState } from 'react';
import '../pattern-lib/styles-list.css';
import './styles/drawer.css';
import DrawerHandle from './drawer-handle';
import Palette from './palette';
const Drawer = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const paletteClass = isOpen ? 'expander_pushdownContent' : 'expander';
  return (
      <div className=''>
        <Palette isOpen={isOpen} className={paletteClass} {...props}/>
        <DrawerHandle currentColor={props.currentColor} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
  )
}

export default Drawer;
