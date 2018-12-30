import { Functions } from "./functions";

const args: string[] = process.argv.splice(2);
console.log('Input params are', args);
const functionsObj = new Functions();

if (args.length == 0) {
  functionsObj.printInformations();
} else if (args[0] == '-l') {
  functionsObj.printTasks();
} else if (args[0] == '-a') {
  functionsObj.addTask(args);
} else if (args[0] == '-r') {
  
} else if (args[0] == '-c') {
  
}