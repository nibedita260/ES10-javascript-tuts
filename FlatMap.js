var arr=[1,2,3,4,5];
arr.forEach((x, i) => console.log(x, i))
console.log(arr)

var arrMap=arr.map(x=>[x,x*2]);
console.log(arrMap)

// var arrFlatMap=arr.flatMap(x=>[x,x*2]);
// console.log(arr.flatMap(x=>[x,x*2]))
