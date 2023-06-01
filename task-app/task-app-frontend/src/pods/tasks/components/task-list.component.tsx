import React from 'react';
import { Task } from '../viewmodels';
import { TaskComponent } from './task.component';

type ActionType = 'update' | 'delete';

interface Props {
  tasks: Task[];
  isAdmin?: boolean;
  onActionTask?: (taskId: number, actionType: ActionType) => void;
}

export const TaskListComponent: React.FC<Props> = (props: Props) => {
  const { tasks, isAdmin, onActionTask } = props;
  return (
    <>
      {tasks &&
        tasks.map((t) => (
          <div key={t.id} style={{ paddingTop: '1rem' }}>
            <TaskComponent
              task={t}
              isAdmin={isAdmin}
              onActionTask={onActionTask}
            />
          </div>
        ))}
    </>
  );
};
