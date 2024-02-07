const fs = require('fs');

// Reading a file

// let readFileContent = fs.readFileSync('f1.txt');
// console.log('data of file1-> \n' + readFileContent);

// // Writing in a file

// fs.writeFileSync('f2.txt', 'This is the content of file2\n');
// console.log('File has been written successfully');

// // Appending in a file

// fs.appendFileSync('f2.txt', 'This is the appended content of file2');


// console.log('File has been appended successfully');

// // Deleting a file
// fs.unlinkSync('f3.txt');
// console.log('File has been deleted successfully');

//fs.mkdirSync('mydirectory')

// check the content of a directory
// let folderPath = '/Users/aankitroy/Workspace/Experiments/learning/nodejs-practice/1_Node_Module_system/mydirectory'

// let folderContent = fs.readdirSync(folderPath)

// console.log("Folder Content",folderContent)

// check if directory exists
fs.existsSync('mydirectory') ? console.log('Directory exists') : console.log('Directory does not exist')


fs.rmdirSync('mydirectory')
console.log('Directory has been deleted successfully')


