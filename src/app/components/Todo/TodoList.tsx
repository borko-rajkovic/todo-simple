import { Button, IconButton, List, Paper, Snackbar, Theme, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { memo, useState } from 'react';

import { Todo } from '../../models/Todo';
import TodoComponent from './TodoComponent';

const styles = (theme: Theme) => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

const TodoList = memo((props: { items: Todo[]; classes: Record<'close', string> }) => {
  const [open, setOpen] = useState(false);
  const { classes } = props;

  const handleOpen = () => setOpen(true);

  const handleClose = (event: React.SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {props.items.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List>
            {props.items.map((todo, index) => (
              <TodoComponent
                todo={todo}
                key={`TodoItem.${index}`}
                divider={index !== props.items.length - 1}
                openSnackbar={handleOpen}
              />
            ))}
          </List>
        </Paper>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">Todo deleted</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>,
          <IconButton key="close" aria-label="Close" color="inherit" className={classes.close} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </>
  );
});

export default withStyles(styles)(memo(TodoList));
