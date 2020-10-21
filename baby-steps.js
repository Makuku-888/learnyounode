// const readline = require("readline");
// const rl = readline.createInterface({
    //     input: process.stdin,
    // output: process.stdout
    // })
    
    
const process = require("process");
const arr =[]

process.argv.forEach((item,i)=>{
    // console.log(`"Inhalt des Array[${i}] => ${item} `)
    arr.push(`${item}`)
})
console.log(arr)