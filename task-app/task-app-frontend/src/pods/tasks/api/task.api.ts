import { Task } from './task.model';
import { TaskNew } from '../viewmodels/task-new.viewmodel';

let tasks: Task[] = [
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

export const getTasks = (): Promise<Task[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res(tasks);
    }, 200);
  });

export const getTasksByUserId = (userId: number): Promise<Task[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res(tasks.filter((t) => t.userId === userId));
    }, 200);
  });

export const addTask = (taskNew: TaskNew): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const resolveUserName = tasks.find(
        (t) => t.id === taskNew.userId
      ).userName;
      const task: Task = {
        id: Date.now(),
        description: taskNew.description,
        userId: taskNew.userId,
        title: taskNew.title,
        userName: resolveUserName,
      };
      tasks = tasks.concat(task);
      resolve();
    }, 200);
  });
