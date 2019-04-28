import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import classNames from 'classnames';
import React, { memo } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { Todo } from '../../models/Todo';
import { deleteTodo, markTodo } from '../../store/actions';

const TodoComponent = memo(
  (props: { todo: Todo; divider: boolean; checkTodo: typeof markTodo; removeTodo: typeof deleteTodo }) => (
    <ListItem divider={props.divider}>
      <Checkbox
        onClick={() => props.checkTodo({ id: props.todo.id, completed: !props.todo.completed })}
        checked={props.todo.completed}
        disableRipple
      />
      <ListItemText
        primary={props.todo.text}
        secondary={<Moment fromNow>{+new Date(props.todo.timestamp)}</Moment>}
        classes={{ primary: classNames({ strike: props.todo.completed }) }}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={() => props.removeTodo({ id: props.todo.id })}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);

const mapDispatchToProps = {
  checkTodo: markTodo,
  removeTodo: deleteTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoComponent);
