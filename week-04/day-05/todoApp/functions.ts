import { Task } from "./task";

const fs = require('fs');
const charEndcoding = 'utf-8';
const taskText = "todo_tasks.txt";
const commandsText = "commands_information.txt";

export class Functions {
  taskList: Task[] = this.createTaskObjectsFromFile();

  printInformations() {
    try {
      console.log(fs.readFileSync(commandsText, charEndcoding));
    } catch (err) {
      throw new Error('Unable to read file: commands_information.txt');
    }
  }

  printTasks() {
    if (!isNaN(this.taskList[0].id)) {
      this.taskList.forEach(task => console.log(task.toString()));
    } else {
      console.log('No todos for today! :)');
    }
  }

  addTask(args: string[]) {
    if (args.length > 2) {
      args.shift();
      let taskDescreption = args.join(' ');
      
      let newTask: Task = this.createTaskObjectFromArg(this.taskList.length, taskDescreption)
      this.taskList.push(newTask);

      console.log(`NEW TASK ADDED: ${newTask.toString()}`);

      this.writeTasksIntoFile(this.taskList);
    } else {
      console.error('Unable to add: no task provided')
    }
  }
  
  removeTask(args: string[]) {
    if (args.length != 2) {
      console.error('Unable to remove: none or too many index provided');
    } else if (isNaN(parseInt(args[1]))) {
      console.error('Unable to remove: index is not a number');
    } else if (parseInt(args[1]) > this.taskList.length) {
      console.error('Unable to remove: index is out of bound');
    } else {
      this.taskList = this.removeCertainTask(parseInt(args[1]), this.taskList);
      this.writeTasksIntoFile(this.taskList);
    }
  }

  createTaskObjectsFromFile(): Task[] {
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

      stringTaskList.forEach(stringTask => seperatedStringTaskList.push(
        parseInt(stringTask.substring(0, 1)),  
        stringTask.substring(6, 7), 
        stringTask.substring(9, stringTask.lastIndexOf('\r') != -1 ? stringTask.lastIndexOf(stringTask.slice(-1)) : stringTask.lastIndexOf((stringTask.substr(stringTask.length))))));

      return seperatedStringTaskList;
    } catch (e) {
      throw new Error('Unable to read file: todo_tasks.txt');
    }
  }

  createTaskObjectFromArg(idNum: number, taskDescreption: string): Task {
    return new Task(idNum + 1, false, taskDescreption);
  }

  writeTasksIntoFile(taskList: Task[]) {
    let taskString: string = '';
    taskList.forEach(task => task.id == taskList.length ? taskString += task.toString() : taskString += task.toString() + '\n');

    try {
      fs.writeFileSync(taskText, taskString);
    } catch (e) {
      throw new Error('Unable to read file: todo_tasks.txt');
    }
  }

  removeCertainTask(idNum: number, taskList: Task[]): Task[] {
    let task = this.getCertainTask(idNum, taskList);
    let taskListWithRemovedElement = taskList.filter(x => x.id != task.id);
    this.addNewIndecesAfterRemoval(taskListWithRemovedElement);
    
    console.log(`TASK REMOVED: ${task.toString()}`);
    return taskListWithRemovedElement;
  }

  getCertainTask(idNum: number, taskList: Task[]) {
    let task: Task= null;
    taskList.forEach(x => x.id == idNum ? task = x : 0);
  
    return task;
  }

  addNewIndecesAfterRemoval(taskList: Task[]) {
    let counter: number = 1;
    taskList.forEach(task => task.id = counter++);

    return taskList;
  }
}