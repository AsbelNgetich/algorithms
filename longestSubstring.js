/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = (s)=> {

  var found= {}
  let newStr=""
  let longest = 0;
  let position = 0;
  let i = 0;
  while(i<s.length){

    if(!found[s[i]]){
      found[s[i]] = true
      newStr += s[i];
      if(newStr.length > longest){
        longest = newStr.length
      }
    }else{
      found = {}
      newStr = ""
      position +=1
      i = position - 1
    }

    console.log("I is " + i)
    i++;
  }



    return longest
          
}


    console.log(lengthOfLongestSubstring("dvdf"))
   