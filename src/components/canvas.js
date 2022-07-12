import React, { useState, useCallback, useEffect } from 'react'
import './styles/canvas.css';
import { handleDraw } from './util';



const Canvas = ({ currentColor, darkMode, zanyMode }) => {
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
  const canvasRef = useCallback((canvasDomEl) => {
    if (canvasDomEl !== null) {
      setCanvas(canvasDomEl);
      setCtx(canvasDomEl.getContext('2d'));
    }
  }, []);

  useEffect(() => {
    if (canvas && ctx) {
    ctx.fillStyle = darkMode ? '#000000' : '#f1f1f1' // for unusual composite
    // ctx.fillStyle = '#ffffff'

    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }}, [canvas, darkMode] )

    useEffect(() => {
    if (canvas && ctx) {
      const drawing = (e) => {
        // other composite notes below
        ctx.globalCompositeOperation = zanyMode ? "difference" : "source-over"; // diff = noblack! zaniest with darkmode

        ctx.fillStyle = currentColor;
        handleDraw({ e, ctx, currentColor });
      };

      canvas.addEventListener('pointermove', drawing);
      canvas.addEventListener('touchmove', drawing);
      canvas.addEventListener('mousedown', drawing);
    }
  }, [canvas, currentColor, zanyMode]);

  return (<canvas className="canvas" ref={canvasRef} height={window.innerHeight} width={window.innerWidth}></canvas>);
}


export default Canvas;


// ctx.globalCompositeOperation = 'color-burn'; //zipper? nowhite!

// ctx.globalCompositeOperation = 'multiply'; // colors spread out nowhite!

// ctx.globalCompositeOperation = "difference"; // noblack! //zaniest with darkmode

// ctx.globalCompositeOperation = 'xor'; //zany no layer

// ctx.globalCompositeOperation = 'soft-light'; //spraypain zany layers! allcolor

// ctx.globalCompositeOperation = 'overlay'; //spraypaint layers weird allcolor
