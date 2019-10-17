import * as React from 'react';
import { TaskListComponent } from './components/task-list.component';
import { TaskFormComponent } from './components/task-form.component';
import { getTasks, addTask } from './api/task.api';
import { mapTaskModelToTaskVMCollection } from './mappers'
import { TaskNew } from './viewmodels/task-new.viewmodel';

export const TaskContainer: React.FunctionComponent = () => {
  const [tasks, setTasks] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

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
    addTask(taskNew)
      .then(() => {
        setRefresh(true);
      });
  };

  return (
    <>
      <TaskFormComponent saveTask={onSaveTask} />
      <TaskListComponent tasks={tasks} />
    </>
  );
}
