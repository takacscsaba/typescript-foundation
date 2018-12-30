import { Task } from "./task";

const fs = require('fs');
const charEndcoding = 'utf-8';
const taskText = "todo_tasks.txt";
const commandsText = "commands_information.txt";

export class Functions {

  printInformations() {
    try {
      console.log(fs.readFileSync(commandsText, charEndcoding));
    } catch (err) {
      throw new Error('Unable to read file: commands_information.txt');
    }
  }

  printTasks() {
    try {
      // return fs.readFileSync(taskText, charEndcoding);

      let taskList = this.createTaskObjFromString();
      
      taskList.forEach(task => console.log(task.toString()));
    } catch (err) {
      throw new Error('Unable to read file: todo_tasks.txt');
    }
  }

  createTaskObjFromString(): Task[] {
    let taskList: Task[] = [];
    let seperatedStringTaskList = this.sliceUpTaskStrings();

    for (let i = 0; i < seperatedStringTaskList.length; i += 3) {
      let id: number = seperatedStringTaskList[i];
      let isCompleted: boolean = seperatedStringTaskList[i + 1] == 'X';
      let taskDescription: string = seperatedStringTaskList[i + 2];

      taskList.push(new Task(id, isCompleted, taskDescription));
    }

    return taskList;
  }

  sliceUpTaskStrings() {
    try {
      let stringTaskList: string[] = fs.readFileSync(taskText, charEndcoding).toString().split("\n");
      let seperatedStringTaskList = [];
      
      // stringTaskList.forEach(stringTask => console.log(
      //   parseInt(stringTask.substring(0, 1)),  
      //   stringTask.substring(6, 7), 
      //   stringTask.substring(9, stringTask.lastIndexOf('\r') != -1 ? stringTask.lastIndexOf(stringTask.slice(-1)) : stringTask.lastIndexOf((stringTask.substr(stringTask.length))))));

      stringTaskList.forEach(stringTask => seperatedStringTaskList.push(
        parseInt(stringTask.substring(0, 1)),  
        stringTask.substring(6, 7), 
        stringTask.substring(9, stringTask.lastIndexOf('\r') != -1 ? stringTask.lastIndexOf(stringTask.slice(-1)) : stringTask.lastIndexOf((stringTask.substr(stringTask.length))))));

      return seperatedStringTaskList;
    } catch (e) {
      throw new Error('Unable to read file: todo_tasks.txt');
    }
  }
}