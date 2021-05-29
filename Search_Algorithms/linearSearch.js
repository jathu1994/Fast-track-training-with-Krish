/*
this runs through the whole array until it finds the search value
*/
function linearSearch(arr,searchValue){

    var foundAtIndex = -1;

    for(i=0;i<arr.length;i++){

        if(arr[i] == searchValue){

            foundAtIndex = i;
            return foundAtIndex;

        }

    }

    return foundAtIndex;

}

module.exports = {
    linearSearch
}