function binarySearch(arr, searchValue, low, high) {

    if(low<=high){
        let middle = low + Math.floor((high - low) / 2);

        if (arr[middle] == searchValue) {

            return middle;   
        }
        else if (searchValue < arr[middle]) {
            return binarySearch(arr, searchValue, low, middle-1);
        }
        else if (searchValue > arr[middle]) {
            return binarySearch(arr, searchValue, middle + 1, high);

        }
    }
    return -1;

}


var items = [2,5,8,12,16,23,38,56,72,91];
console.log(binarySearch(items,91,0,items.length));