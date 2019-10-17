import * as React from 'react';
import * as viewmodel from '../viewmodels/task.viewmodel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
  task: viewmodel.Task,
  // extend withh handlers
}

const useStyles = makeStyles({
  card: {
    minWidth: 300
  }
})

export const TaskComponent: React.FunctionComponent<Props> = (props: Props)  => {
  const { title, description, userName } = props.task;
  const classes = useStyles({});
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textPrimary">
          {title}
        </Typography>
        <Typography color="textSecondary">
          {userName}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

