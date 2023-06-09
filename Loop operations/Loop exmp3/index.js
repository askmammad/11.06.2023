"use strict"

//first method

let array = [4, 8, 9, 10, 1, 5, 3];
function double(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
    array.splice(i, 1, array[i]);
  }
  return array;
}
console.log(double(array));

//second method

let array1 = [4, 8, 9, 10, 1, 5, 3];
let newArr1 = array1.map(double1);
function double1(item) {
  return item * 2;
}
console.log(newArr1);

//third method

let array2 = [4, 8, 9, 10, 1, 5, 3];
array2.forEach(double2);
function double2(item, index, arr) {
  arr[index] = item * 2;
}
console.log(array2);

