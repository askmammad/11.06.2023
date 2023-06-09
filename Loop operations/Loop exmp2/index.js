"use strict"

//first method

let array = [4, 8, 9, 10, 1, 5, 3];
function maximum(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(maximum(array));

//second method

let array1 = [4, 8, 9, 10, 1, 5, 3];
console.log(Math.max(...array1));
