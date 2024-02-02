const fs = require('fs');

// Reading a file

let readFileContent = fs.readFileSync('f1.txt');
console.log('data of file1-> \n' + readFileContent);

// Writing in a file

fs.writeFileSync('f2.txt', 'This is the content of file2\n');
console.log('File has been written successfully');

// Appending in a file

fs.appendFileSync('f2.txt', 'This is the appended content of file2');


console.log('File has been appended successfully');

// Deleting a file
fs.unlinkSync('f3.txt');
console.log('File has been deleted successfully');