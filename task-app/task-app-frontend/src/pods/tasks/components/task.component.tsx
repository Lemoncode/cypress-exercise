import React from 'react';
import { Task } from '../viewmodels';
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  task: Task;
}

// TODO: Add styles
export const TaskComponent: React.FC<Props> = (props: Props) => {
  const {
    task: { title, description, userName },
  } = props;

  return (
    <Card sx={{ padding: '0.5rem' }}>
      <CardContent>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='h5'>{userName}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};
