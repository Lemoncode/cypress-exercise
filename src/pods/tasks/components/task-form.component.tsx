import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { DropdownComponent } from '../../../common/components/dropdown.component';
import { Lookup } from '../../../common/viewmodel';
import * as api from '../api';
import { mapUserModelToLookupCollection } from '../mappers'
import { TaskNew } from '../viewmodels/task-new.viewmodel';


interface State {
  title: string;
  description: string;
  users: Lookup[];
  userId: number;
}

interface Props {
  saveTask: (taskNew: TaskNew) => void;
}


const useStyles = makeStyles(
  {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    textField: {
      marginLeft: 16,
      marginRight: 16,
      width: 200,
    },
  }
);


export const TaskFormComponent: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles({});
  const [values, setValues] = React.useState<State>({
    title: '',
    description: '',
    userId: 0,
    users: [],
  });

  React.useEffect(() => {
    api.getUsers()
      .then(mapUserModelToLookupCollection)
      .then(
        (_users) => {
          const noSelected: Lookup = {id: 0, value: 'no selected'};
          const lookups = [noSelected].concat(..._users)
          setValues({...values, users: lookups});
        })
      .catch((err) => console.log(err))
  }, []);

  const handleChange = (fieldName: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };

  const handleChangeDropdown = (_, value) => {
    setValues({...values, userId:+value});
  }

  const handleSubmit = ({title, description, userId}) => (e) => {
    e.stopPropagation();
    props.saveTask({title, description, userId});
  }


  return (
    <form noValidate autoComplete="off" className={classes.container}>
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
        <DropdownComponent
          list={values.users}
          label="Users"
          name="user"
          value={values.userId}
          onChange={handleChangeDropdown}
        />
        <Button onClick={handleSubmit(values)}>
          Add Task
        </Button>
    </form>
  );
}
