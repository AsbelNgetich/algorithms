//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//no built in functions!! toUpperCase is OK
//if(str[0] >= "A" && str[0] <= "Z") can be useful
const isPangram = (str) => {
   
    const found= {}
    let newStr=""
    str = str.toUpperCase()
    console.log(str)
    for(let i =0; i<str.length; i++){
        if(str[i] >= "A" && str[i] <= "Z"){      
            if ( !found[ str[ i ] ] ) {
                found[ str[ i ] ] = true
                console.log(found)
                newStr += str[ i ]
            }        
        }
    }
    console.log(newStr)
    if(newStr.length == 26){
        return true
    }else
        return false   
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));
//returns true
//console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
// console.log(isPangram("Sphinx of black quartz, judge my vow"));

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
// const isPerfectPangram = (str) => {
// }

// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true