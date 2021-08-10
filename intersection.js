
const intersect=(left,right)=>{
    let newArr = [];
    let len=0;
    if(left.length>right.length){
        len = left.length
    }else{
        len = right.length
    }

    let r1 =0;
    let r2 =0;

    for(let i =0; i<=len; i++){

        if(left[r1]==right[r2]){
            newArr.push(left[r1])
            r1 = r1 + 1
            r2 = r1 + 1
        }else if(left[r1]<right[r2]){   
            r1 = r1 + 1
        }else if(left[r1]>right[r2]){
            r2 = r2 + 1
        }
    }

    return newArr;


}

let arr1 = [1, 2, 2, 2, 7,8,13];

let arr2 = [2, 2, 6, 6, 7,9,13];

console.log(intersect(arr1,arr2));


//efficiently combine two sorted arrays into an array containing the sorted intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7]
// result should look like this --> [2, 2, 7]

//another example
let arr3 = [5,6,8,8,9,12,13];
let arr4 = [1,2,3,4,5,8,8,8,13];

console.log(intersect(arr3,arr4));





//expected result
//result = [5,8, 8]