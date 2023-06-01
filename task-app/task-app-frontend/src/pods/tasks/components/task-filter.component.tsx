import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface Props {
  onFilter: (filterValue: string) => void;
}

export const TaskFilterComponent: React.FC<Props> = (props: Props) => {
  const { onFilter } = props;
  const [filterValue, setFilterValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  const handleFilter = (filterValue: string) => () => {
    onFilter(filterValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TextField
        label="Filter by user name"
        value={filterValue}
        onChange={handleChange}
      />
      <Button sx={{ marginLeft: '1rem' }} onClick={handleFilter(filterValue)}>Filter</Button>
    </Box>
  );
};
