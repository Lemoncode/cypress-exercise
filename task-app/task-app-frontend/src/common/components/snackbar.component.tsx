import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

interface Props {
  open: boolean;
  handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
  severity: AlertColor;
  message?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarComponent: React.FC<Props> = ({
  open,
  handleClose,
  severity,
  message,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};
