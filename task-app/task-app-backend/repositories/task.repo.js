let tasks = [
  {
    userId: 1,
    userName: 'jai',
    description: 'back to Malaga by bus, train or what ever',
    id: 1,
    title: 'Back Home',
  },
  {
    userId: 2,
    userName: 'lau',
    description: 'play with my new toys',
    id: 2,
    title: 'Play with Toys',
  },
];

module.exports = {
  getTasks() {
    return [...tasks];
  },
  getTaskById(id) {
    const task = tasks.find(t => t.id === id);
    return { ...task };
  },
  getTasksByUserId(userId) {
    return tasks.filter(t => t.userId === userId);
  },
  addTask(task) {
    const _task = {
      ...task,
      id: Date.now(),
    };
    tasks = [...tasks, _task];
  },
  deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
  },
  updateTask(task) {
    tasks = tasks.map(t => {
      if (t.id === task.id) {
        return {
          ...t,
          title: task.title,
          description: task.description,
        };
      }
      return t;
    });
  },
  print() {
    console.log(tasks);
  },
};
