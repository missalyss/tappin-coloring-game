export const colorMap = {
red: '#FF1700',
orange: '#FF8E00',
yellow: '#F7EC09',
green: '#3EC70B',
blue: '#3B44F6',
purple: '#A149FA',
pink: '#FF008E',
white: '#FFFFFF',
// black: '#000000',
}

export const colorArray = [
  {red: '#FF1700'},
  {orange: '#FF8E00'},
  {yellow: '#F7EC09'},
  {green: '#3EC70B'},
  {blue: '#3B44F6'},
  {purple: '#A149FA'},
  {pink: '#FF008E'},
  {white: '#FFFFFF'},
  // {black: '#000000'},
]

export const randomizer = (num) => {
  const randomNum = Math.floor(Math.random() * num);
  return randomNum
}

export  const handleDraw = ({ e, ctx }) => {
  e.preventDefault();
  ctx.beginPath()
  const x = e.layerX;
  const y = e.layerY;

  ctx.arc(x, y, 15, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
}
