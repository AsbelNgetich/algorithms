const reverseWordOrder = (str) => {
    // let words = stringToWordArray(str);
    // let reverse = "";

    // for(let i = words.length - 1; i >= 0; --i){
    //     reverse += words[i] + " ";
    // }
    // return reverse;
    let reverse = "";
    let word = "";
    let isWord = false;

    for(let i = 0; i < str.length; ++i){
        if (str[i] !== " "){
            word += str[i];
            isWord = true;
        }
        else if(str[i] === " " && isWord){
            reverse = word + " " + reverse;
            word = "";
            isWord = false;
        }
    }
    if (isWord) reverse = word + " " + reverse;
    return reverse;
}

console.log(reverseWordOrder("Did I shine my shoes       today?        "));