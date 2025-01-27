// The fs module in Node.js is short for File System, and it provides a way to interact with the file system on your computer. It allows you to perform various operations like reading, writing, updating, and deleting files, as well as working with directories.

const fs = require("fs")

// console.log(fs);

console.log("starting");
// fs.writeFileSync("harry.txt" , "Harry is a good boy")  //It is a synchronous and its not good as js is async

fs.writeFile("harry2.txt"  , "Harry is a good boy2" , () => {
    console.log("done");
    fs.readFile("harry2.txt" , (error , data) => {
        console.log(error,"\n",data.toString());
        
    })
    
})   //Here as js is async so "Ending" is print first and then "done" is printed after the file is made and have the data "Harry is a good boy" .

fs.appendFile("harry.txt" , "Bikashhhhhhhhhhhhhhh " , (e,d) => {   //here d is data in the harry.txt before appending 
    console.log(e,d);
    
})
console.log("Ending");
