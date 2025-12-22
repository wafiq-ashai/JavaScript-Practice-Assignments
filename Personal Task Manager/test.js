taskManager.addTask('Learn JavaScript - DOM Manipulation', 'high', '2025-12-13' )
taskManager.addTask('Frontend mini projects', 'high', '2025-12-13' )
taskManager.addTask('Exercise', 'medium', '2025-12-10' )
taskManager.addTask('Car wash', 'low', '2025-12-11' )

//Display my current tasks

console.log(taskManager.tasks);

//Test removeTask()
taskManager.removeTask(0) // Task not found because we don't have id = 0
taskManager.removeTask(2)

//Now lets check our ful tasks list again
console.log(taskManager.tasks);  //task 2 has been deleted

// markComplete and findTask

taskManager.markComplete(1)
console.log(taskManager.findTask(1))

//listTasks
console.log(taskManager.listTasks());

//editTask

taskManager.editTask(1, {
    title: 'New title',
    priority: undefined,
    dueDate: '2026-01-08'
})
console.log(taskManager.findTask(1));

//getOverdueTasks
console.log(taskManager.getOverdueTasks());

//generateSummary
console.log(taskManager.generateSummary())





