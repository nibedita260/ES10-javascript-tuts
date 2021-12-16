//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
var arr=[1,2,3,[4,5,[6,7,8]]]
console.log(arr.flat(0));
console.log(arr.flat(1));
console.log(arr.flat(2));