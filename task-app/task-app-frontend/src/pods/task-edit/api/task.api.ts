import { Task } from './task.model';
import { Task as TaskViewmodel } from '../viewmodels';

// TODO: Move base URL to common config and inject it via environment variables
const basURL = 'http://localhost:3000';

export const getTaskById = (userId: number, id: number) => {
  return fetch(`${basURL}/api/tasks/${userId}/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(task => ({
      id: task.id,
      title: task.title,
      description: task.description,
    }));
};

export const updateTask = (task: TaskViewmodel) => {
  const _task: Task = {
    id: task.id,
    description: task.description,
    title: task.title,
  };
  return fetch(`${basURL}/api/tasks/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(_task),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};
