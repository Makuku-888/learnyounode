// let fs = request('fs');
const fs = require('fs');

let out = fs.readFileSync('test.html','utf-8').split('\n')
// .toString()  
// let number = out.
// .split('\n')

console.log(out);
// console.log(number);