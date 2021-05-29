function swap(items, i, j) {
    var temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        //these i and j are created just for not be confused with left and right
        i = left,
        j = right;

    while (i <= j) {

        // when left side elements are lesser than pivot element increment i to indicate next index
        while (items[i] < pivot) {
            i++;
        }

        //when right side elements are higer than pivot element decrement j to indicate next index to be compared
        while (items[j] > pivot) {
            j--;
        }

        // swapping takeplace if any higher element found on leftside or lower element found on right side until i is less than or eqal to j

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {

    var pivot = partition(items, left, right);

    /*the termination condition is 
    ---(left>=pivot&&right<=pivot)--- 
    at this stage both low index and pivot are at same element 
    so no need of any swapping or partitioning
    so at this stage the controll will not enter these if condition to call the quicksort again
    thus it return result*/

    //this conmdition do the sorting with individual 1st halfs each time
    if (left < pivot - 1) {
        quickSort(items, left, pivot - 1);
    }
    //this conmdition do the sorting with individual 2nd halfs each time
    if (pivot < right) {
        quickSort(items, pivot, right);
    }
    return items;
}

module.exports = {
    quickSort
}

