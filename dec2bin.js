const dec2bin = (dec)=>{

    let bin= "";
    let temp = "0";
    while(dec > 0){
        // if(dec==1){
        //     bin +=1
        //     break;
        // }else{
        temp = dec%2;  
        dec = Math.floor(dec/2) 
        bin +=temp
        //}
    }
    return bin.split("").reverse().join("")
    
}

console.log(dec2bin(8))

