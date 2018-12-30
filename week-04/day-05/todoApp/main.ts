import { Functions } from "./functions";

const args = process.argv.splice(2); // Just a helper for you to get started
console.log('Input params are', args);
const functionsObj = new Functions();

if (args.length == 0) {
  functionsObj.printInformations();
} else if (args[0] == '-l') {
  functionsObj.printTasks();
} else if (args[0] == '-a') {
  
} else if (args[0] == '-r') {
  
} else if (args[0] == '-c') {
  
}