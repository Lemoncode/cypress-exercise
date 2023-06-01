import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { TaskNew } from '../viewmodels';

// TODO: Add simple validation
interface State {
  title: string;
  description: string;
}

interface Props {
  saveTask: (taskNew: Omit<TaskNew, 'userId'>) => void;
}

export const TaskFormComponent: React.FC<Props> = (props: Props) => {
  const [values, setValues] = useState<State>({ title: '', description: '' });

  const handleChange =
    (fieldName: keyof State) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [fieldName]: event.target.value });
    };

  const handleSubmit =
    ({ title, description }) =>
    (e) => {
      e.stopPropagation();
      props.saveTask({ title, description });
    };

  return (
    <form noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <TextField
        id="task-title"
        label="Title"
        value={values.title}
        onChange={handleChange('title')}
      />
      <TextField
        id="task-description"
        label="Description"
        value={values.description}
        onChange={handleChange('description')}
      />
      <Button onClick={handleSubmit(values)}>Add Task</Button>
    </form>
  );
};
