//Find if the number is event
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

isEven();

//Common Search Algorithms

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
    }
  }
};

findIndex();


//!Linear Search Algorithm




//!Binary Search Code Example
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));