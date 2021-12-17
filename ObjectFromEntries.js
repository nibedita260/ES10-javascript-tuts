//Object.fromEntries() method transforms a list of key-value pairs into an object.
//ex1:-
var obj={key1:"val1",key2:"val2",key3:"val3"}
var entries=Object.entries(obj);
console.log(entries)

var fromEntries=Object.fromEntries(obj);
console.log(fromEntries)

//ex2-:
var entries1=new Map(['jhon','joe'],['age',25]);
console.log(Object.fromEntries(entries1))