const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while(low <= high) {
    const middle = Math.floor((low + high) / 2);
    const value = list[middle];
    if (value === item) {
      return middle;
    } else if (value > item) {
      high = middle - 1;
    } else {
      low = middle + 1
    }
  }

  return null;
}

export default binary_search;