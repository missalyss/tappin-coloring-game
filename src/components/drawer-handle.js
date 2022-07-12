import React from 'react';
import '../pattern-lib/styles-list.css';
import './styles/drawer.css';

const DrawerHandle = ({setIsOpen, isOpen, currentColor}) => {
  return (
      <div style={{borderColor: currentColor }} className='drawerEdge text-center'>
        <button style={{backgroundColor: currentColor}} className="handle" onClick={() => setIsOpen(!isOpen)}>.......</button>
      </div>
  )
}

export default DrawerHandle;
