const fs = require('fs');
const charEndcoding = 'utf-8';

function contentCopier(fileName1: string, fileName2: string): boolean {
  try {
    if (fs.existsSync(fileName1, charEndcoding) && fs.existsSync(fileName2, charEndcoding)){
      fs.writeFileSync(fileName2, fs.readFileSync(fileName1, charEndcoding));
    } else {
      throw new Error(`Unable to read file: ${fileName1} or ${fileName2}`);
    }
  } catch (err) {
      return false;
 }
 return true;
}

console.log(contentCopier("copy-from.txt", "paste-into.txt"));
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful