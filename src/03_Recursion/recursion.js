export const recursiveFunc = (i) => {
  console.log(i);
  if (i === 20) {
    console.log(`${i} is the last number in this recursion!`);
    return;
  } else {
    recursiveFunc(i + 1);
  }
}
