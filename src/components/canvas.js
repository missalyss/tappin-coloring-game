import React, { useRef, useEffect } from 'react'

const Canvas = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }, [])

  useEffect(() => {
    const erase = (e) => {
      const ctx = canvas.getContext('2d');
      const x = e.layerX;
      const y = e.layerY;
      ctx.clearRect(x, y, 20, 20)
      ctx.clearRect(x, y, -20, 20)
      ctx.clearRect(x, y, 20, -20)
      ctx.clearRect(x, y, -20, -20)

    }
    const canvas = canvasRef.current
    canvas.addEventListener('mousemove', (e) => {
      erase(e)
    })

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault()
      erase(e)
    });
  })
  return (<canvas ref={canvasRef} height={window.innerHeight - 86} width={window.innerWidth}></canvas>);
}


export default Canvas;
