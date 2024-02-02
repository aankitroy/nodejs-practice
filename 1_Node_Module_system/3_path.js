const path  = require('path');
let ext = path.extname('/Users/aankitroy/Workspace/Experiments/learning/nodejs-practice/test-files/file1.txt');
console.log(ext);

let base = path.basename('/Users/aankitroy/Workspace/Experiments/learning/nodejs-practice/test-files/file1.txt');
console.log(base);

console.log(__filename);
console.log(__dirname);