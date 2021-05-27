function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let max = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        if (max != i) {
            let tmp = arr[i];
            arr[i] = arr[max];
            arr[max] = tmp;
        }
    }
    return arr;
}


//sorts array in decending order and find the 3rd index and return value
function findThirdLargestNumber(arr){

    if(arr.length>=3){
        selectionSort(arr);
        return arr[2];

    }
    else{
        return "array don't have 3 elements"
    }
    

}

var items = [5, 3, 7, 6, 2, 9];

console.log(findThirdLargestNumber(items));
console.log(items);

