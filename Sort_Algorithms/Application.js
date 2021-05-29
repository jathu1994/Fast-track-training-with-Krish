var {bubbleSort} = require('./bubbleSort');
var {quickSort} = require('./quickSort');
var {selectionSort} = require('./selectionSort');


//selection sort

// var items = [5, 3, 7, 6, 2, 9];
// console.log("given array");
// console.log(items);
// selectionSort(items);
// console.log("sorted array");
// console.log(items);

//bubble sort

// var items = [64, 34, 25, 10, 22];
// console.log("given array");
// console.log(items);
// bubbleSort(items);
// console.log("Sorted array:");
// console.log(items);

//quick sort

var items = [5, 3, 7, 6, 2, 9, 1];
console.log("given array");
console.log(items);
quickSort(items, 0, items.length - 1);
console.log("Sorted array:");
console.log(items);