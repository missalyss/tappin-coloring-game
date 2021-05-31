import React, { useRef, useEffect } from 'react'

const Canvas = ({ currentColor }) => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }, [])

  useEffect(() => {
    const draw = ({ e, canvas }) => {
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

    const canvas = canvasRef.current

    if (canvas) {
      canvas.addEventListener('mousemove', (e) => {
        draw({ e, canvas })
      })

      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault()
        draw({ e, canvas })
      });
    }
  })



  return (<canvas ref={canvasRef} height={window.innerHeight - 86} width={window.innerWidth}></canvas>);
}


export default Canvas;
