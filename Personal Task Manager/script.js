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
            if (taskId == this.tasks[i].id) {
                this.tasks.splice(i, 1)
                console.log(`Task ${taskId} removed successfully`);
                return
                
            }
        }
        console.log(`Task not found!`);       
    },

    markComplete: function(taskId) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (taskId == this.tasks[i].id) {
                if(this.tasks[i].completed === true) {
                    console.log("Task already completed");
                    return    
                } else {
                    this.tasks[i].completed = true
                    this.tasks[i].dateCompleted = new Date().toISOString()
                    console.log(`Task ${this.tasks[i].id} has been sucessfully marked as complete.`);
                    return
                }
            }
        }
        console.log('Task not found'); 

    },

    findTask: function(taskId) {
        for(let i = 0; i < this.tasks.length; i++) {
            if(taskId == this.tasks[i].id) {
                return this.tasks[i]
            }
        }
        return `Task not found`
    },

    listTasks: function() {
        return this.tasks
    },

    getPriorityTasks: function(priority) {
        let list = []
        for(let i = 0; i < this.tasks.length; i++) {
            if(priority == this.tasks[i].priority) {
                list.push(this.tasks[i])
            }
        }
        return list
    }

}