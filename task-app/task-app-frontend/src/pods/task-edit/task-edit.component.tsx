import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@mui/material';
import { TextFieldComponent } from 'common/components';
import { formValidation } from './task-edit.validations';
import { Task } from './viewmodels';

interface Props {
  task: Task;
  onSave: (task: Task) => void;
}

export const TaskEditComponent: React.FC<Props> = ({ onSave, task }) => {
  return (
    <Formik
      onSubmit={onSave}
      initialValues={task}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form>
          <TextFieldComponent name="title" label="Title" />
          <TextFieldComponent
            name="description"
            label="Description"
            multiline={true}
            rows={3}
            maxRows={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
