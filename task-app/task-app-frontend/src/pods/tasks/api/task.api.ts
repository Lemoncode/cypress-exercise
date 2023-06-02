import { Task } from './task.model';
import { TaskNew, Task as TaskViewmodel } from '../viewmodels';

// TODO: Move base URL to common config and inject it via environment variables
const baseURL = 'http://localhost:3000';

const mapTaskModeltoViewModel = (taskModel: Task) => {
  const task: TaskViewmodel = {
    description: taskModel.description,
    id: taskModel.id,
    title: taskModel.title,
    userName: taskModel.userName,
  };

  return task;
};

export const getTasks = (): Promise<TaskViewmodel[]> => {
  return fetch(`${baseURL}/api/tasks`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(tasks => {
      return tasks.map(mapTaskModeltoViewModel);
    });
};

export const getTaskById = (
  userId: number,
  id: number
): Promise<TaskViewmodel> => {
  return fetch(`${baseURL}/${userId}/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(result => {
      return mapTaskModeltoViewModel(result);
    });
};

export const getTasksByUserId = (userId: number): Promise<TaskViewmodel[]> => {
  return fetch(`${baseURL}/api/tasks/${userId}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(tasks => {
      return tasks.map(mapTaskModeltoViewModel);
    });
};

export const addTask = (taskNew: TaskNew): Promise<void> => {
  return fetch(`${baseURL}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskNew),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

export const deleteTask = (taskId: number): Promise<void> => {
  return fetch(`${baseURL}/api/tasks/${taskId}`, { method: 'DELETE' }).then(
    response => {
      if (response.ok) {
        return response.json();
      }
    }
  );
};
