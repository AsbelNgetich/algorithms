//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
// const combine = (leftArr, rightArr) => {
// }

const combine = (leftArr, rightArr) => {
    let left=0;
    let right=0;
    let newArr=[];
    while(left<leftArr.length||right<rightArr.length){
        if(left>= leftArr.length){
            newArr.push(rightArr[right]);
            ++right;
        }
        else if(right>=rightArr.length){
            newArr.push(leftArr[left]);
            ++left;
        }
        else{
            newArr.push(rightArr[right]);
            ++right;
        }
    }
    return newArr;
}
console.log(combine( [ 1, 3, 5, 7 ], [ 0, 2, 4, 6 ]));








//should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));

//should return [0,1]
// console.log(combine([1],[0]));