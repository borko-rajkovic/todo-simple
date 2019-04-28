import { List, Paper } from '@material-ui/core';
import React, { memo } from 'react';

import { Todo } from '../../models/Todo';
import TodoComponent from './TodoComponent';

const TodoList = memo((props: { items: Todo[] }) => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {props.items.map((todo, index) => (
            <TodoComponent todo={todo} key={`TodoItem.${index}`} divider={index !== props.items.length - 1} />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TodoList;
