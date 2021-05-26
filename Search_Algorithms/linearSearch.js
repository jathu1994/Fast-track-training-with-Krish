function linearSearch(arr,searchValue){

    var foundAtIndex = -1;

    for(i=0;i<arr.length;i++){

        if(arr[i] == searchValue){

            foundAtIndex = i;

        }

    }

    return foundAtIndex;

}

var items = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
console.log(linearSearch(items,111));