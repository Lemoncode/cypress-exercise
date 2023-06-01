import React, { useContext, useEffect, useState } from 'react';
import {
  TaskFormComponent,
  TaskListComponent,
  TaskFilterComponent,
} from './components';
import { addTask, getTasksByUserId, getTasks } from './api/task.api';
import { mapTaskModelToTaskVMCollection } from './mappers';
import { TaskNew, Task } from './viewmodels';
import { SessionContext, Role } from 'core/session-context';

const getAllTasks = (...setters) => {
  getTasks()
    .then(mapTaskModelToTaskVMCollection)
    .then((tasks) => {
      setters[0](tasks);
      setters[1](tasks);
    })
    .catch((err) => console.log(err));
};

const getAllsTasksByUserId =
  (...setters) =>
  (userId: number) => {
    getTasksByUserId(userId)
      .then(mapTaskModelToTaskVMCollection)
      .then((tasks) => {
        setters[0](tasks);
        setters[1](false);
      });
  };

const isAdmin = (role: Role) => role === 'admin';

export const TaskContainer: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>();
  const [refresh, setRefresh] = useState(false);
  const {
    login: { id, role },
  } = useContext(SessionContext);
  const doGetAllsTasksByUserId = getAllsTasksByUserId(setTasks, setRefresh);

  useEffect(() => {
    console.log('rendering');
  });

  useEffect(() => {
    if (role === 'admin') {
      getAllTasks(setTasks, setFilteredTasks);
    }
  }, [role]);

  useEffect(() => {
    if (refresh || role === 'standard') {
      doGetAllsTasksByUserId(id);
    }
  }, [refresh, role]);

  const onSaveTask = (taskNew: TaskNew) => {
    taskNew.userId = id;
    addTask(taskNew).then(() => {
      setRefresh(true);
    });
  };

  const onFilterTasks = (filterValue: string) => {
    const result = tasks.filter((t) => t.userName.includes(filterValue));
    setFilteredTasks(result);
  };

  const handleActionTask = (
    taskId: number,
    actionType: 'update' | 'delete'
  ) => {};

  return (
    <>
      {isAdmin(role) ? (
        <>
          <TaskFilterComponent onFilter={onFilterTasks} />
          <TaskListComponent isAdmin={true} tasks={filteredTasks} />
        </>
      ) : (
        <>
          <TaskFormComponent saveTask={onSaveTask} />
          <TaskListComponent
            isAdmin={false}
            tasks={tasks}
            onActionTask={handleActionTask}
          />
        </>
      )}
    </>
  );
};
