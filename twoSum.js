let target = 9
nums = [2,7,11,15];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let number=[]
   
   for(let i =0; i<nums.length; i++){
       for(let j=0; j<=i; j++){
           console.log("i "+ i + " j " +j)
           if(i!=j){
               if(nums[i] + nums[j] == target){
                   number.push(i)
                   number.push(j)
                   return number
                   
               }
           }
         
       }
    
   }
   return number
       
   };
       
   nums = [3,2,4];
   
   console.log(twoSum(nums,6))
