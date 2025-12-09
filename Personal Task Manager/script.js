let taskManager = {
    tasks: [],
    assignID: 1,
    addTask: function(title, priority, dueDate) {
        let newTask = {
            id: this.assignID,
            title: title,
            priority: priority,
            dueDate: dueDate,
            completed: false,
            dateCreated: new Date().toISOString(),
            dateCompleted: null
        }
        this.assignID++
        this.tasks.push(newTask)
        console.log(`Task added successfully: ${newTask.title}`);
    },
    removeTask: function(taskId) {
        for(let i = 0; i < this.tasks.length; i++) {
            if (taskId === this.tasks[i].id) {
                this.tasks.splice(i, 1)
                console.log(`Task ${taskId} removed successfully`);
                return
                
            }
        }
        console.log(`Task not found!`);       
    }


}