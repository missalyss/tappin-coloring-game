import React, { useRef, useEffect } from 'react'

const Canvas = ({ currentColor, currentText }) => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }, [])

  useEffect(() => {
    const drawRect = ({ e, canvas }) => {
      const ctx = canvas.getContext('2d');
      ctx.beginPath()
      const x = e.layerX;
      const y = e.layerY;
      ctx.fillStyle = currentColor;
      ctx.fillRect(x, y, 10, 10)
      ctx.fillRect(x, y, -10, 10)
      ctx.fillRect(x, y, 10, -10)
      ctx.fillRect(x, y, -10, -10)
    }

    const drawText = ({ e, canvas }) => {
      const ctx = canvas.getContext('2d');
      ctx.beginPath()
      const x = e.layerX;
      const y = e.layerY;
      console.log({ currentText });
      ctx.fillStyle = currentColor;
      ctx.font = '24px helvetica'
      ctx.fillText(currentText, x, y)
    }

    const canvas = canvasRef.current

    if (canvas) {
      canvas.addEventListener('mousemove', (e) => {
        drawRect({ e, canvas })
      })

      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault()
        drawRect({ e, canvas })
      });
    }
  })



  return (<canvas ref={canvasRef} height={window.innerHeight - 86} width={window.innerWidth}></canvas>);
}


export default Canvas;
