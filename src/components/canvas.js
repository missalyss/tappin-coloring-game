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
    const canvas = canvasRef.current
    canvas.addEventListener('mousemove', function (event) {
      var ctx = canvas.getContext('2d');
      var x = event.layerX;
      var y = event.layerY;
      ctx.clearRect(x, y, 20, 20)
    });
  })
  return (<canvas ref={canvasRef} height={window.innerHeight} width={window.innerWidth}></canvas>);
}


export default Canvas;
