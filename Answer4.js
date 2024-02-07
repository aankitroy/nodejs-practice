const path = require('path');

function resolvePath(relativePath) {

  const resolvedPath = path.resolve(relativePath);
  console.log('Resolved Path:', resolvedPath);
}

resolvePath('../nodejs-practice/test-files/file.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt