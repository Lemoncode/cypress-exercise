import React from 'react';
import { Task } from '../viewmodels';
import { TaskComponent } from './task.component';

interface Props {
  tasks: Task[];
}

export const TaskListComponent: React.FC<Props> = (props: Props) => {
  const { tasks } = props;
  return (
    <>
      {tasks &&
        tasks.map((t) => (
          <div style={{ paddingTop: '1rem' }}>
            <TaskComponent key={t.id} task={t} />
          </div>
        ))}
    </>
  );
};
