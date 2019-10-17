import { Task }  from './task.model';
import { TaskNew } from '../viewmodels/task-new.viewmodel';

let tasks: Task[] = [
  {
    user_id: 1,
    user_name: 'jai',
    description: 'back to Malaga by bus, train or what ever',
    id: 1,
    title: 'Back Home',
  },
  {
    user_id: 2,
    user_name: 'lau',
    description: 'play with my new toys',
    id: 2,
    title: 'Play with Toys',
  }
];

export const getTasks = ():Promise<Task[]> => (
  new Promise((res) => {
    setTimeout(() => {
      res(tasks);
    }, 200)
  })
);

export const getTasksByUserId = (userId: number): Promise<Task[]> => (
  new Promise((res) => {
    setTimeout(() => {
      res(tasks.filter((t) => t.user_id === userId));
    }, 200)
  })
);

export const addTask = (taskNew: TaskNew): Promise<void> => (
  new Promise((resolve) => {
    setTimeout(() => {
      const resolveUserName = tasks.find((t) => t.id === taskNew.userId).user_name;
      const task: Task = {
        id: Date.now(),
        description: taskNew.description,
        user_id: taskNew.userId,
        title: taskNew.title,
        user_name: resolveUserName,
      };
      tasks = tasks.concat(task);
      resolve();
    }, 200);
  })
)
