import React, { useEffect, useState, useContext } from 'react';
import { TaskEditComponent } from './task-edit.component';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, updateTask } from './api';
import { Task } from './viewmodels';
import { linkRoutes } from 'core/router';
import { SessionContext } from 'core/session-context';

export const TaskEditContainer: React.FC = () => {
  const [task, setTask] = useState<Task>({ description: '', title: '' });
  const navigationParams = useParams();
  const navigate = useNavigate();
  const {
    login: { id },
  } = useContext(SessionContext);

  useEffect(() => {
    if (id) {
      getTaskById(id, (navigationParams as any).id).then(res => {
        setTask({
          ...res,
        });
      });
    }
  }, [id]);

  const onSave = (task: Task) => {
    updateTask(task).then(() => {
      navigate(linkRoutes.tasks);
    });
  };

  return <TaskEditComponent task={task} onSave={onSave} />;
};
