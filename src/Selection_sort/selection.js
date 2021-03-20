// Selection sort O(n * 2);
// Random array used as parameter

// Find the smallest element of array
export const findSmallestIndex = (array) => {
  let smallestElement = array[0];
  let smallestIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

export const selectionSort = (array) => {
  const sortingArray = [...array];
  const sortedArray = [];
  const length = sortingArray.length;

  for (let i = 0; i < length; i++) {
    // find the smallest element
    const smallestIndex = findSmallestIndex(sortingArray);

    //and put it on the last position of new array
    sortedArray.push(sortingArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}