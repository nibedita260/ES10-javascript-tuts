//To prevent JSON.stringify from returning ill-formed Unicode strings
var x=JSON.stringify('---')
console.log(x)

var ux=JSON.stringify('\uDF23\uD834')
console.log(ux)