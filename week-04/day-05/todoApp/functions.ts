const fs = require('fs');
const charEndcoding = 'utf-8';
const fileName = "todo_tasks.txt";
const commandsText = "commands_information.txt";

export class Functions {
  printInformations() {
    try {
      return fs.readFileSync(commandsText, charEndcoding);
    } catch (err) {
      throw new Error('Unable to read file: commands_information.txt');
   }
  }
}