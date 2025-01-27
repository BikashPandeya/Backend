// The fs.promises API in Node.js is a promise-based version of the standard fs (File System) module, introduced to make working with files easier and cleaner when using asynchronous code. With fs.promises, you can perform file operations like reading, writing, and deleting files using async and await, instead of using callbacks. This allows for a more modern and readable approach to handling file system operations.
import fs from "fs/promises"

let a = await fs.readFile("harry.txt")
//As we are inside a module we can directly use await

// let b = await fs.writeFile("harry.txt" , "\n\nThis is amazing promise")   //iT REDEFINES ALL THE DATA WITH NEW DATA
let b = await fs.appendFile("harry.txt" , "\n\nThis is amazing promise") 
console.log(b);

console.log(a.toString());
