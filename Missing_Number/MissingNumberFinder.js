//assumption is given
// only one number is missing in the array
function findMissing(arr){

    arr.sort(function(a, b){return a-b});
    console.log(arr);

    for(i=0;i<arr.length-1;i++){

        if(arr[i+1]-arr[i]!=1){
            return `missing number is ${arr[i]+1}`;
            break;

        }

    }

    return `missing number may be ${arr[0]-1} or ${arr[arr.length-1]+1}`
}

var items = [4,5,6,7,8,9,10,2,3];
console.log(findMissing(items));