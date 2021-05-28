
function binarySearch(input, target) {
    if (target < input[0] || target > input[input.length -1]) {
        return false
    }
    if (target == input[0] || target == input[input.length -1]) {
        return true
    }
    var midpoint = Math.ceil((input.length/2))
    if (target == input[midpoint]) {
        return true
    }
    else if (target < input[midpoint]) {
        input = input.slice(0, midpoint)
        var recurse =binarySearch(input, target)
    }
    else if (target > input[midpoint]) {
        input = input.slice(midpoint, input.length)
        var recurse = binarySearch(input, target)
    }
    return recurse
}

input = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15]

console.log(binarySearch(input, 1));
console.log(binarySearch(input, 2));
console.log(binarySearch(input, 3));
console.log(binarySearch(input, 4));
console.log(binarySearch(input, 5));
console.log(binarySearch(input, 6));
console.log(binarySearch(input, 7));
console.log(binarySearch(input, 8));
console.log(binarySearch(input, 10));
console.log(binarySearch(input, 11));
console.log(binarySearch(input, 12));

console.log(binarySearch(input, -1));
console.log(binarySearch(input, 24));
console.log(binarySearch(input, 9));