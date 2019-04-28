import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React, { memo, useState } from 'react';
import { connect } from 'react-redux';

import { createTodo } from '../../store/actions';

const AddTodo = memo(({ saveTodo }: { saveTodo: typeof createTodo }) => {
  const [value, setValue] = useState('');
  const submit = (event: React.KeyboardEvent | React.MouseEvent) => {
    event.preventDefault();
    saveTodo({
      text: value
    });
    setValue('');
  };

  return (
    <div>
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
              placeholder="Add Todo here"
              value={value}
              onChange={event => {
                setValue(event.target.value);
              }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  submit(event);
                }
              }}
              fullWidth
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button fullWidth color="primary" variant="contained" onClick={submit}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
});

const mapDispatchToProps = {
  saveTodo: createTodo
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
