import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    title: [Validators.required],
    description: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
