//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the newly partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3
const partition = (arr) => {

    var pivot = arr[0];
    var pointer = 0;

    console.log("this is the pivot" + pivot);
    for(var i =0; i<arr.length-1; i++){
        if(pivot>arr[i]){
            console.log("first digit "+ arr[i]);
            console.log("pivot " + pivot);
            var temp = arr[i];
            arr[i]= pivot;
            arr[pointer]=temp;
            console.log("index at i "+arr[i]);
            console.log("the array");
            console.log(arr);
            
        }
        console.log("the array");
        console.log(arr);
    }
    return arr;


}

//should return [4,2,3,5,9,5]
console.log(partition([5,4,9,2,5,3]));
//should return [4,7]
console.log(partition([7,4]));
//should return [2,1,3,4,5]
console.log(partition([3,5,1,2,4]));

