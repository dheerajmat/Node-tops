// todo-app.js
const fs = require('fs');
const yargs = require('yargs');

// Add a task
yargs.command({
  command: 'add',
  describe: 'Add a new task',
  builder: {
    task: {
      describe: 'Task description',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    const task = argv.task;
    fs.appendFileSync('tasks.txt', `${task}\n`);
    console.log(`Task "${task}" added successfully.`);
  },
});

// List tasks
yargs.command({
  command: 'list',
  describe: 'List all tasks',
  handler: () => {
    const tasks = fs.readFileSync('tasks.txt', 'utf8').split('\n');
    tasks.forEach((task, index) => {
      if (task.trim()) {
        console.log(`${index + 1}. ${task}`);
      }
    });
  },
});

yargs.argv;




///////// node .\TODO.js  add --task "hello my name is dheeraj"      to add the task////
//////// node .\TODO.js  list  //////// to view the list