
const randomColor = () => Math.floor(Math.random() * 200);
const tickColor = () => {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return { bg: `rgba(${r}, ${g}, ${b}, 0.2)`, brdr: `rgba(${r}, ${g}, ${b}, 1)` };
}

export const getColorsArray = () => {
  const backgroundColor = [];
  const borderColor = [];
  for(var i = 0; i < 20; i++) {
    let { bg, brdr } = tickColor();
    backgroundColor.push(bg);
    borderColor.push(brdr);
  }
  return { backgroundColor, borderColor };
}
