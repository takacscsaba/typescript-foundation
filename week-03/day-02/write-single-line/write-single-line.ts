const fs = require('fs');
const charEndcoding = 'utf-8';

function writeToFile(fileName: string)  {
  try {
     if (fs.existsSync(fileName, charEndcoding)){
          fs.writeFileSync(fileName, "Csaba");
      }
  else {
          throw new Error(`Unable to write file: ${fileName}`);
      }
  }
  catch (err) {
      console.log(err.message);
  }
}

writeToFile("my-file.txt");