import React, { useContext, useEffect, useState } from 'react';
import {
  TaskFormComponent,
  TaskListComponent,
  TaskFilterComponent,
} from './components';
import { SnackbarComponent } from 'common/components';
import {
  addTask,
  getTasksByUserId,
  getTasks,
  deleteTask,
} from './api/task.api';
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

const isEmptyString = (value: string) => value && value === '';

const isValidTaskNewValue = (value: string) => value && !isEmptyString(value);

const isValidNewTask = (newTask: TaskNew) => {
  return (
    newTask &&
    isValidTaskNewValue(newTask.description) &&
    isValidTaskNewValue(newTask.title)
  );
};

export const TaskContainer: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>();
  const [refresh, setRefresh] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
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
    if (isValidNewTask(taskNew)) {
      addTask(taskNew).then(() => {
        setRefresh(true);
      });
    } else {
      setIsSnackbarOpen(true);
    }
  };

  const onFilterTasks = (filterValue: string) => {
    const result = tasks.filter((t) => t.userName.includes(filterValue));
    setFilteredTasks(result);
  };

  const handleActionTask = (
    taskId: number,
    actionType: 'update' | 'delete'
  ) => {
    if (actionType === 'delete') {
      deleteTask(taskId).then(() => {
        setRefresh(true);
      });
    }
  };

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
      <SnackbarComponent
        severity="error"
        handleClose={() => {
          setIsSnackbarOpen(false);
        }}
        message='Title and description are mandatory'
        open={isSnackbarOpen}
      />
    </>
  );
};
