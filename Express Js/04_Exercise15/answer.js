// const fs = require('fs');
// const path = require('path');

// // Path to the folder
// const folderPath = './'; // Replace with your folder path

// // Read the directory
// fs.readdir(folderPath, (err, files) => {
//   if (err) {
//     return console.error('Unable to scan directory:', err);
//   }
//   console.log(files);
//   console.log(folderPath);
  
//   // Iterate through each file in the folder
//   files.forEach((file) => {
//     // Get the full path of the file
//     const filePath = path.join(folderPath, file);
    
//     // Check if it's a file (not a directory)
//     fs.stat(filePath, (err, stats) => {
//       if (err) {
//         return console.error('Unable to get file stats:', err);
//       }

//       if (stats.isFile()) {
//         // Extract the file extension

//         const extension = path.extname(file);
//         console.log(`File: ${file}, Extension: ${extension}`);
//         // console.log(extension.slice(1));
        
//         const folder = (extension.slice(1) == "jpg" || "pdf" || "png" || "zip") ? (
//             fs.rename(`./${file}`, `./${extension}/${file}`,(err)=>{})
//         ) : (`${file} does not have a specific folder`);
//       }
//     });
//   });
// });



const fs = require('fs');
const path = require('path');

// Path to the folder
const folderPath = './'; // Replace with your folder path

// Read the directory
fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err);
  }

  console.log('Files:', files);
  
  // Iterate through each file in the folder
  files.forEach((file) => {
    // Get the full path of the file
    const filePath = path.join(folderPath, file);

    // Check if it's a file (not a directory)
    fs.stat(filePath, (err, stats) => {
      if (err) {
        return console.error('Unable to get file stats:', err);
      }

      if (stats.isFile()) {
        // Extract the file extension
        const extension = path.extname(file).slice(1); // Remove the dot

        console.log(`File: ${file}, Extension: ${extension}`);

        // Check if the extension matches the given list
        if (["jpg", "pdf", "png", "zip"].includes(extension)) {
          const newFolderPath = path.join(folderPath, extension);
            // console.log(newFolderPath);
            
          // Create the folder if it doesn't exist
          if (!fs.existsSync(newFolderPath)) {
            fs.mkdirSync(newFolderPath);
          }

          // Move the file to the corresponding folder

          const newFilePath = path.join(newFolderPath, file);
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              return console.error(`Error moving file ${file}:`, err);
            }
            console.log(`Moved ${file} to ${newFolderPath}`);
          });
        } else {
          console.log(`${file} does not have a specific folder.`);
        }
      }
    });
  });
});
