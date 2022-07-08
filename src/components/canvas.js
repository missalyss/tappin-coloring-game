import React, { useState, useCallback, useEffect } from 'react'
import './styles/canvas.css';
import { colorMap, handleDraw } from './util';



const Canvas = ({ currentColor, currentText }) => {
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
console.log('cur: ', currentColor);
  const canvasRef = useCallback((canvasDomEl) => {
    if (canvasDomEl !== null) {
      setCanvas(canvasDomEl);
      setCtx(canvasDomEl.getContext('2d'));
    }
  }, []);

  useEffect(() => {
    if (canvas && ctx) {
    ctx.fillStyle = '#f1f1f1'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }}, [canvas] )

    useEffect(() => {
    if (canvas && ctx) {
      const drawing = (e) => {
        handleDraw({ e, ctx, currentColor });
      };

      canvas.addEventListener('pointermove', drawing);
      canvas.addEventListener('touchmove', drawing);
      canvas.addEventListener('mousedown', drawing);
      return () => {
        canvas.removeEventListener('pointermove', drawing);
        canvas.removeEventListener('touchmove', drawing);
        canvas.removeEventListener('mousedown', drawing);
      };
    }
  }, [canvas, currentColor]);

  return (<canvas className="canvas" ref={canvasRef} height={window.innerHeight - 86} width={window.innerWidth}></canvas>);
}


export default Canvas;
