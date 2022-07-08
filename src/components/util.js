export const colorMap = {
red: '#FF1700',
orange: '#FF8E00',
yellow: '#F7EC09',
green: '#3EC70B',
blue: '#3B44F6',
purple: '#A149FA',
black: '#000000',
pink: '#FF008E',
white: '#FFFFFF',
}

export const colorArray = [
  {red: '#FF1700'},
  {orange: '#FF8E00'},
  {yellow: '#F7EC09'},
  {green: '#3EC70B'},
  {blue: '#3B44F6'},
  {purple: '#A149FA'},
  {black: '#000000'},
  {pink: '#FF008E'},
  {white: '#FFFFFF'},
]

export const randomizer = (num) => {
  const randomNum = Math.floor(Math.random() * num);
  return randomNum
}

export  const handleDraw = ({ e, ctx, currentColor }) => {
  ctx.beginPath()
  const x = e.layerX;
  const y = e.layerY;
  ctx.fillStyle = currentColor;
  // ctx.globalCompositeOperation = 'color-burn'; //zipper? nowhite
  // ctx.globalCompositeOperation = 'overlay'; //spraypaint layers weird
  // ctx.globalCompositeOperation = 'multiply'; // colors spread out nowhite

  ctx.globalCompositeOperation = 'xor'; //zany best!
  // ctx.globalCompositeOperation = 'exclusion'; //sim to difference lower contrast
  // ctx.globalCompositeOperation = 'soft-light'; //spraypain layers weird allcolor




  ctx.arc(x, y, 20, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();

        // ctx.fillRect(x, y, 10, 10)
        // ctx.fillRect(x, y, -10, 10)
        // ctx.fillRect(x, y, 10, -10)
        // ctx.fillRect(x, y, -10, -10)
      }
