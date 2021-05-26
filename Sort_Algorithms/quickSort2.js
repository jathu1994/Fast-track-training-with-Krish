function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    var pivot = arr[high];
    console.log("pivot = "+pivot);
    var i = (low - 1);

    for (var j = low; j <= high - 1; j++) {

        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
function quickSort(arr, low, high) {
    console.log("low = " + low + " high =" + high)
    if (low < high) {

        var pi = partition(arr, low, high);
        
        // if(low < pi-1){
        // console.log("first");
        // quickSort(arr, low, pi - 1);
        // }
        // if(pi<high){
        // console.log("second");
        // quickSort(arr, pi + 1, high);
        // }

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

    console.log("-----------");
}


// var arr = [10, 7, 8, 9, 1, 5];
var arr = [10,80,30,90,40,50,70];
// var arr = [10,30,40,50,70,80,90];
var n = arr.length;

quickSort(arr, 0, n - 1);
console.log("Sorted array: ");
console.log(arr);
