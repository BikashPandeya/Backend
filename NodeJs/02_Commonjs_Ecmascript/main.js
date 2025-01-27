// const { createServer } = require('node:http');
//require is used to import any modules
//Using require is using common js
//For this type in package.json should be commonjs



//It is modern way to import modules
//It is ecmascript and For this type in package.json should be module

// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/\n `);
// });
  

//Press ctrl + C to type new commands in terminal while server is running

//FOr constant change in server with change in script use       nodemon main.js      or its same like           nodemon scriptname(ex:script.js)




// Importing through Es module


// import {a , b} from "./mymodule.js"  //importing named export
// console.log(a);
// console.log(b);


// import harry from "./mymodule.js"   //Importing default export(bikash) in mymodule.js as harry 
// console.log(harry);




//Commonjs is default type in package.js . if their is no type then type is commonjs
const a = require("./mymodule2.js")
console.log(a);


// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

