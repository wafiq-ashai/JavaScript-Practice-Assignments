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
    },

    editTask: function(id, updates) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (id == this.tasks[i].id) {
                let currentTask = this.tasks[i]

                if (updates.title !== undefined) {
                    currentTask.title = updates.title
                }

                if (updates.priority !== undefined) {
                    currentTask.priority = updates.priority
                }

                if (updates.dueDate !== undefined) {
                    currentTask.dueDate = updates.dueDate
                }
                console.log('Task updated sucessfully');
                

                return

            }
        }
        console.log('Task not found!');
        
    },
    getOverdueTasks: function() {
        let overDueTasks = []
        let now = new Date()
        for (let i = 0; i < this.tasks.length; i++) {
            let currentTask = this.tasks[i]
            let currentDuedate = new Date(currentTask.dueDate)

            if(currentTask.completed === false && currentDuedate < now) {
                overDueTasks.push(currentTask)

            }
        }
        return overDueTasks 
    },

    generateSummary: function() {
        let completedTasks = 0
        let highTasks = 0
        let lowTasks = 0
        let mediumTasks = 0
         for (let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].completed === true) {
                completedTasks++
            }

            if(this.tasks[i].priority == 'high') {
                highTasks++
            }

              if(this.tasks[i].priority == 'low') {
                lowTasks++
            }
              if(this.tasks[i].priority == 'medium') {
                mediumTasks++
            }
         }
        let Total = this.tasks.length
        let getResult = this.getOverdueTasks().length
        let summary = {
            totalTasks: this.tasks.length,
            completedTasks: completedTasks,
            pendingTasks: Total - completedTasks,
            overDueTasks: getResult,
            byPriority: {
                high: highTasks,
                medium: mediumTasks,
                low: lowTasks,
            },
        }
        return summary  
        
    }





}
    