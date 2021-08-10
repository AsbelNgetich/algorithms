const dec2hex = (dec)=>{

    let hex= "";
    let temp = "0";
    while(dec > 0){
        temp = dec%16;  
        if (temp>9){
            switch(temp){
            case 10:
                temp = "A";
                break;
            case 11:
                temp = "B";
                break;
            case 12:
                temp = "C";
                break;
            case 13:
                temp = "D";
            case 14:
                temp = "E";
                break;
            case 15:
                temp = "F";
                break;
            }
        }
        hex +=temp
        dec = Math.floor(dec/16)       
    }
    return hex.split("").reverse().join("")
    
}

console.log(dec2hex(108))