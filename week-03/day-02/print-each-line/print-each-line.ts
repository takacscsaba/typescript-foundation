const fs = require('fs');
const charEndcoding = 'utf-8';

function readFromfile(fileName: string)  {
  try {
     if (fs.existsSync(fileName, charEndcoding)){
          let result = (fs.readFileSync(fileName, charEndcoding));
          console.log(result);
      }
  else {
          throw new Error(`Unable to read file: ${fileName}`);
      }
  }
  catch (err) {
      console.log(err.message);
  }
}

readFromfile("my-file.txt");