/*
this assumes the array is already sorted
it devides the array into two halfs by a middle element
compares and check the search element higher or lower and take the relevant half and discard the other
this will continue until element found at middle or left with only one element
*/
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

module.exports={
    binarySearch
}