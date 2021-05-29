/*
the outer loop increment the starting index of the array each time.
the inner loop runs through all remaining array elements for each iteration of the outer loop 
and if a minimum number is found than the 1st element of each iteration it do a swap.

we can change this to sort in decending order with minimal change in the swap condition
*/
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

module.exports = {
    selectionSort
}



