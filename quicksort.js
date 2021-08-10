const partition2 = (arr, left, right) => {
    let pivot = arr[left];
    let pointer = left;

    for(let i = left; i <= right; ++i){
        if(arr[i] < pivot){
            ++pointer;
            [arr[i], arr[pointer]] = [arr[pointer],arr[i]];
        }
    }
    [arr[left], arr[pointer]] = [arr[pointer],arr[left]];
    return pointer;
}

const quickSort = (arr,left,right)=> {

    if(right<=left){
        return null;
    }
    let index = partition2(arr,left,right);
    if(left<index-1){
        //sort left half
       quickSort(arr, left, index-1);
    }
    if(index<right){
        //sort right half
       quickSort(arr,index,right);
    }
  

}
var arr = [7,45,2,67,3,2,1];
quickSort(arr, 0, 6);

console.log(arr);

