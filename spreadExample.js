let spread = [23,3,5,78];

let addition = [10,43]

spread = [...spread,...addition];

console.log(spread);

for(var i = 0; i<spread.length; i++){
    console.log("i is "+i+ " Spread is " + spread[i]);
}