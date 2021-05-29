/*
this function compares the adjusant element and swap according to condition. 
for sorting in acending order bigger number is sswaped to right 
and finally at end of one loop biggest number is placed at last index.
same process will repeated decrementing the last index 
since the last elements will be in order from the previous iteration
*/
function bubbleSort(arr) {
    var n = arr.length;
    var i, j;
    for (i = 0; i < n - 1; i++) {

        for (j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }

    }
}

module.exports = {
    bubbleSort
}

