import React, { useState } from 'react';
import { TaskFormComponent, TaskListComponent } from './components';
import { addTask, getTasksByUserId, getTasks } from './api/task.api';
import { mapTaskModelToTaskVMCollection } from './mappers';
import { TaskNew } from './viewmodels/task-new.viewmodel';

// TODO: Retrieve userId from context on container
export const TaskContainer: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  React.useEffect(() => {
    if (refresh || tasks.length === 0) {
      getTasks()
        .then(mapTaskModelToTaskVMCollection)
        .then((tasks) => {
          setTasks(tasks);
          setRefresh(false);
        })
        .catch((err) => console.log(err));
    }
  }, [refresh]);

  // TODO: Add a new card to cards
  // TODO: Move to a side effect
  const onSaveTask = (taskNew: TaskNew) => {
    addTask(taskNew).then(() => {
      setRefresh(true);
    });
  };

  return (
    <>
      <TaskFormComponent saveTask={onSaveTask} />
      <TaskListComponent tasks={tasks} />
    </>
  );
};
