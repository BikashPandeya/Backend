import path from "path"
// console.log(path);

let mypath ="d:\\0000 _ Web development\\Backend\\03_Files_fs_and_path_module\\about_path.js" 
// console.log(mypath);
console.log(path.extname(mypath));


console.log("\n",path.dirname(mypath) , "\n");
console.log("\n",path.basename(mypath) , "\n");


console.log(path.join("C:/" , "programs\\harry.txt"));
