// Write a function that accepts 3 arrays. The function should return true if every value in the array has a corresponding value squared in the second array. The frequency of vallues must be the same.

//NAIVE

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);

//REFACTORED

function same2(arr1, arr2) {
  //RETURN FALSE IF THE LENGTH IS NOT THE SAME
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //Create key value pairs for arrays. If key value exists add one to it. If it doesn't start at 0 and add 1.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

// ANAGRAM ATTEMPT(WRONG)

function validAnagram1(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let string1count = {};
  let string2count = {};

  for (let char in string1) {
    string1count[char] = (string1count[char] || 0) + 1;
  }

  for (let char in string2) {
    string2count[char] = (string2count[char] || 0) + 1;
  }

  for (let key in string1count) {
    if (!(key in string2count)) {
      return false;
    }

    if (string2count[key] !== string1count[key]) {
      return false;
    }
  }

  return true;
}

// console.log("luke solution", validAnagram1("anagram", "nagarams"));

//

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  //   console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram2("anagrams", "nagarams");

// SUMZERO
// naive
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function countUniqueValues(arr) {
  left = 0;
  right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
    // console.log(arr);
  }

  return left + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3, 3, 5, 6, 7, 7, 7, 8]));

// Sliding Window NAIVE

function maxSubarraySum1(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// Refactor
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

//RECURSION

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));

// Factorial Iterative

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
}
//Factorial recursive
function factorial(num) {
  while (num > 1) {
    return num * factorial(num - 1);
  }
  return 1;
}

// console.log(factorial(4));

// Collect Odd

function collectOdds(arr) {
  let newArr = [];

  function helper(arr2) {
    if (arr2.length === 0) {
      return;
    }

    if (arr2[0] % 2 !== 0) {
      newArr.push(arr2[0]);
    }

    helper(arr2.slice(1));
  }

  helper(arr);

  return newArr;
}
//Pure Recursion

function findOdds(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  return newArr.concat(findOdds(arr.slice(1)));
}

const oddArray = [1, 33, 5, 2, 78, 23, 7, 3];

// console.log(collectOdds(oddArray));

function power(base, exp) {
  while (exp > 0) {
    return base * power(base, exp - 1);
  }
  return 1;
}

//Linear Search

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }

    return -1;
  }
}

//Binary Search

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  //Run the loop while there is at least one item in the array, or before left and right "crossover"
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    }

    if (arr[middle] > val) {
      right = middle - 1;
    }

    if (arr[middle] < val) {
      left = middle + 1;
    }
  }

  return -1;
}

function recursiveBinary(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) {
    return middle;
  }

  if (arr[middle] > val) {
    binarySearch(arr.slice(0, middle));
  }

  if (arr[middle] < val) {
    binarySearch(arr.slice(middle + 1));
  }

  return -1;
}

function binarySearch2(arr, val) {
  let middle = Math.floor(arr.length / 2);

  if (arr.length === 1 && arr[0] != val) {
    return -1;
  }

  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] > val) {
    return binarySearch2(arr.slice(0, middle), val);
  } else if (arr[middle] < val) {
    return binarySearch2(arr.slice(middle), val);
  }
}

// console.log("recbin", recursiveBinarySearch2([1, 2, 3, 4, 5, 6], 6));

function recursiveBinarySearch(n, arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != n) {
    return false;
  }
  if (n === arr[mid]) {
    return true;
  } else if (n < arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(0, mid));
  } else if (n > arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(mid));
  }
}
// Recursively returns index by not redifining the array, only redefining the start and end points.

function recursiveBinarySearch2(arr, target, start = 0, stop = arr.length - 1) {
  let midPoint = Math.floor((stop - start) / 2 + start);

  switch (true) {
    case arr[midPoint] === target:
      return midPoint;
    case stop - start === 0:
      return false;
    case arr[midPoint] < target:
      return binarySearch(arr, target, midPoint + 1, stop);
    case arr[midPoint] > target:
      return binarySearch(arr, target, start, midPoint);
  }
}

function naiveString(long, short) {
  let count = 0;

  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      //if j counter get's up to the length of the searched string (without hitting the break^^) then we know we have found the full searched string within the long string
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

// JavaScript built in sort

function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 23, 65].sort(numberCompare);

//Bubble Sort

// Luke's try
function bubbleSort(arr) {
  //Declaring a no swaps variable to monitor if we are changing the array through every top level iteration. If the swap function does not run, we know the array has not changed and no more sorting is required.
  let noSwaps;

  function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
    noSwaps = false;
  }

  //Starts from the end of the array
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // By creating a condition that compares j to i we prevent it from being ran through already sorted elements.
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
// console.log(bubbleSort([1, 3, 4, 7, 5, 98, 4, 32, 6]));

//Naive - simply using the length and starting the array from beginning causes this sort to rerun over previously sorted numbers.

function naiveBubble(arr) {
  //This makes sure it is done as many times as there are elements
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      // console.log(arr);
      if (arr[j] > arr[j + 1]) {
        //Create a temp to save the greater value in a variable before reassigning it.
        var temp = arr[j];
        //Reassign the greater element to the next index
        arr[j] = arr[j + 1];
        // Move the lesser element to the index before
        arr[j + 1] = temp;
      }
    }
  }
}

//Selection Sort

function selectionSort(arr) {
  function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        //Don't use the value, but the index so we can use it to reassign.
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }
  return arr;
}
console.log(selectionSort([1, 3, 4, 7, 5, 98, 4, 32, 6]));
