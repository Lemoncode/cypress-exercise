import React from 'react';
import { Task } from '../viewmodels';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

type ActionType = 'update' | 'delete';

interface Props {
  task: Task;
  isAdmin?: boolean;
  onActionTask?: (taskId: number, actionType: ActionType) => void;
}

// TODO: Add styles
export const TaskComponent: React.FC<Props> = (props: Props) => {
  const {
    task: { title, description, userName, id },
    isAdmin,
    onActionTask,
  } = props;

  const handleTaskAction = (taskId: number, actionType: ActionType) => () => {
    onActionTask(taskId, actionType);
  };

  return (
    <Card sx={{ padding: '0.5rem' }}>
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{userName}</Typography>
        <Typography>{description}</Typography>
        {!isAdmin && (
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button onClick={handleTaskAction(id, 'update')}>Update</Button>
            <Button onClick={handleTaskAction(id, 'delete')}>Delete</Button>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};
