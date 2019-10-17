import * as React from 'react';
import * as viewmodel from '../viewmodels/task.viewmodel';
import { TaskComponent } from './task.component';


interface Props {
  tasks: viewmodel.Task[];
}

export const TaskListComponent: React.FunctionComponent<Props> = (props: Props) => {
  const { tasks } = props;
  return (
    <>
    {
      tasks && tasks.map((t) => <TaskComponent key={t.id} task={t} />)
    }
    </>
  );
};
