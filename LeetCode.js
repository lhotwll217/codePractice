//Binary Search

const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let isFound = false;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      isFound = true;
      break;
    }
  }

  return isFound ? nums.indexOf(target) : -1;
};

arr = [1, 3, 4, 8, 43, 67, 87];

// console.log(search(arr, 2));
function indexOff(arr, target) {
  let index = null;
  for (let counter = 0; counter < arr.length; counter++) {
    if (arr[counter] === target) {
      index = counter;
    }
  }
  return index ? index : -1;
}

// console.log(indexOff(arr, 67));

// INTERSECTION OF ARRAY
// Zach & Eli Solution
var intersection = function (nums1, nums2) {
  let intersectArray = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (n of set1) {
    if (set2.has(n)) {
      intersectArray.push(n);
    }
  }

  return intersectArray;
};

// Leet solutions

var intersectionLeet = function (nums1, nums2) {
  let intersection = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !intersection.includes(nums1[i])) {
      intersection.push(nums1);
    }
  }

  return intersection;
};

var intersection3 = function (nums1, nums2) {
  // sort both arrays
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  // create an array for intersections
  const intersections = [];
  let l = 0,
    r = 0;
  // while both nums1 and nums2 aren't undefined...
  while ((nums2[l] && nums1[r]) !== undefined) {
    const left = nums1[r],
      right = nums2[l];
    // if an intersection is found, push into intersection array
    if (left === right) {
      intersections.push(right);
      while (left === nums1[r]) r++;
      while (right === nums2[l]) l++;
      continue;
    }
    // if right > left
    // loop until left === nums1[r], incrementing r every loop
    // else opposite
    if (right > left) while (left === nums1[r]) r++;
    else while (right === nums2[l]) l++;
  }
  return intersections;
};

// Divide and Conquer && Binary Search

function binarySearch(array, val) {
  // min and max are indexes
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    // define the middle of the array at the beginning of the loop using updated min/max
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
    return -1;
  }
}

//Recursion
