// app.js
const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTaskTitle: '',
      newTaskCompleted: false
    };
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    },
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed).length;
    }
  },
  methods: {
    addTask() {
      const newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: this.newTaskCompleted
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
      this.newTaskCompleted = false;
    },
    updateCompletedTasksCount() {
      this.$nextTick(() => {
        // Recalculate completed tasks count
        this.completedTasksCount = this.tasks.filter(task => task.completed).length;
      });
    }
  },
  created() {
    // Fetch initial data or perform setup operations
  }
});

app.mount('#app');