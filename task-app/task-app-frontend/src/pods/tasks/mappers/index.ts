import * as modelTask from '../api/task.model';
import * as modelUser from '../api/user.model';
import { Task } from '../viewmodels/task.viewmodel';
import { Lookup } from 'common/models';

export const mapTaskModelToTaskVMCollection = (tasks: modelTask.Task[]) =>
  tasks.map<Task>((t) => ({
    description: t.description,
    id: t.id,
    title: t.title,
    userName: t.userName,
  }));

export const mapUserModelToLookupCollection = (users: modelUser.User[]) =>
  users.map<Lookup>((u) => ({
    id: u.id ? u.id.toString() : '',
    name: u.name,
  }));
