var arr=[1,2,3,4,5];

let arr3=arr.forEach((x, i) => console.log(x, i))
console.log("arr foreach"+arr3)

var arrMap=arr.map(x=>[x,x*2]);
console.log("arr map method"+arrMap)

var arrFlatMap=arr.flatMap(x=>[x, x*2]);
console.log("arr flat map method"+arrFlatMap)