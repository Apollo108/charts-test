
export const groupByRange = values => {
  let arr = [];
  for (let i = -10; i < 10; i++) {
    let numberOfValues = values.filter(j => j.value >= i*10 && j.value < (i+1)*10);
    arr.push(numberOfValues.length);
  }
  return arr;
}