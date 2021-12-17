
//The read-only description property is a string returning the optional description of Symbol objects.
var mysymbol='my symbol';

var symObj=Symbol(mysymbol);

console.log(symObj)
console.log(String(symObj)===`Symbol(${mysymbol})`);
console.log(symObj.description);