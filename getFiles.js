const fs = require('fs');
const path = require('path');
const util = require('util');

util.inspect.defaultOptions.maxArrayLength = null;  // Add this line

function getFiles(dirPath, relPath = '.') {
  let results = [];
  const list = fs.readdirSync(dirPath);

  list.forEach(function(file) {
    const absFile = path.join(dirPath, file);
    let relFile = path.join(relPath, file);
    const stat = fs.statSync(absFile);

    // Exclude .git directory and any other directories you don't want to cache
    if (absFile.indexOf('.git') >= 0) {
      return;
    }

    // Convert Windows-style paths to Unix-style paths
    relFile = relFile.split(path.sep).join('/');

    // Prepend .. only if relFile is in a subdirectory
    if (relFile.includes('/')) {
      relFile = '../' + relFile;
    }

    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(getFiles(absFile, relFile));
    } else {
      /* Is a file */
      results.push(relFile);
    }
  });

  return results;
}

const files = getFiles('./');  // Replace with your directory path
console.log(util.inspect(files, { maxArrayLength: null }));  // Modified line
