//Object.fromEntries() method transforms a list of key-value pairs into an object.
//ex1:-
var obj={key1:"val1",key2:"val2",key3:"val3"}
var entries=Object.entries(obj);
console.log(entries);

const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj3 = Object.fromEntries(arr);

console.log(obj3)

var objArr=Object.entries(obj)
console.log(objArr)
var fromEntries=Object.fromEntries(objArr);
console.log(fromEntries)

//ex2-:
var entries1=new Map([['jhon','joe'],['age',25]]);
console.log(Object.fromEntries(entries1))