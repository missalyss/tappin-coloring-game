export const handleMopUp = ({ e, ctx, eraseDiameter }) => {
  e.preventDefault();
  ctx.beginPath();
  const x = e.layerX;
  const y = e.layerY;
  ctx.globalCompositeOperation = 'destination-out';
  ctx.arc(x, y, eraseDiameter, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
};
