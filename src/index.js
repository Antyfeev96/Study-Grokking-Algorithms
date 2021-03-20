import { sortedList, unsortedList }  from './constants';
import binary_search from './01_Binary_search/binary';
import { selectionSort } from './02_Selection_sort/selection';
import { recursiveFunc } from './03_Recursion/recursion';

// Example of binary search

{
  const result = binary_search(sortedList, 45);
  console.log(`Result of binaty search is ${result}`);
}

// Example of selection sort

{
  console.log(`Result of selection sort down below ${selectionSort(unsortedList)}`);
  console.log(`And here we can see unsorted array ${unsortedList}`);
}

// Example of recursion

{
  recursiveFunc(1);
}
