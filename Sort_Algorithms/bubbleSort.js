function bubbleSort(arr) {
    var n = items.length;
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

var items = [64, 34, 25, 10, 22];
bubbleSort(items);
console.log("Sorted array:");
console.log(items);