"use strict"

// if we have only one duplicate

let arr = [1, 2, 3, 4, 4];
let duplicateNum = 0;
function duplicateFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        duplicateNum = arr[i];
      }
    }
  }
  return duplicateNum;
}
console.log(duplicateFunc(arr));

//if we have more than one duplicates

let array = [1, 2, 3, 4, 4, 2];
let duplicateNums = [];
function duplicate(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        duplicateNums.push(array[i]);
      }
    }
  }
  return duplicateNums;
}
console.log(duplicate(array));
