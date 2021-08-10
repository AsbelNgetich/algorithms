
const unionize=(left,right)=>{
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
        console.log("i is... " + i)
        console.log("r1 is " + r1 + " r2 is " + r2)
        if(left[r1]==right[r2]){

            newArr.push(left[r1])
            r1 = r1 + 1
            r2 = r2 + 1
        }else if(left[r1]<right[r2]){   
          
            newArr.push(left[r1])
            r1 = r1 + 1
        }else if(left[r1]>right[r2]){
          
            newArr.push(right[r2])
            r2 = r2 + 1
        }
    }

    if((left.length == right.length)&&(left[left.length-1]==right[right.length-1])){
        newArr.push(left[left.length-1])
    }

    while(r1 < left.length) {
        newArr.push(left[r1])
        r1++
    }
    while(r2 < left.length) {
        newArr.push(right[r2])
        r2++
    }

   

    return newArr;

}
let arr1 = [1, 2, 2, 2, 7];
let arr2 = [2, 2, 6, 6, 7];

console.log(unionize(arr1,arr2))
//result --> [1,2,2,2,6,6,7]

// //another example
let arr3 = [5,6,8,8,9,12];
let arr4 = [1,2,3,4,5,8,8,8];
console.log(unionize(arr3,arr4))
//result --> [1,2,3,4,5,6,8,8,8,9,12]