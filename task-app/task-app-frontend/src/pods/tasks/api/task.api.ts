import { Task } from './task.model';
import { TaskNew, Task as TaskViewmodel } from '../viewmodels';
import { getUserById, getUserByName } from './user.api';

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
      getUserById(taskNew.userId).then((user) => {
        const task: Task = {
          id: Date.now(),
          description: taskNew.description,
          userId: taskNew.userId,
          title: taskNew.title,
          userName: user.name,
        };
        tasks = tasks.concat(task);
        resolve();
      });
    }, 200);
  });

export const deleteTask = (taskId: number): Promise<void> =>
  new Promise((resolve) => {
    tasks = tasks.filter((t) => t.id !== taskId);
    resolve();
  });

export const updateTask = (task: TaskViewmodel): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      getUserByName(task.userName).then((user) => {
        const _task: Task = {
          description: task.description,
          id: task.id,
          title: task.title,
          userId: user.id,
          userName: user.name,
        };

        tasks = tasks.map((t) => {
          if (t.id === _task.id) {
            return _task;
          }
          return t;
        });
        resolve();
      });
    }, 200);
  });
