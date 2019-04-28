import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { History } from 'history';
import PropTypes from 'prop-types';
import React from 'react';

import { Routes } from '../../App';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

export interface Props extends WithStyles<typeof styles> {
  history: History;
}

function ButtonAppBar(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Simple React Todo App
          </Typography>
          <Button color="inherit" onClick={() => props.history.push(Routes.all)}>
            Todos
          </Button>
          <Button color="inherit" onClick={() => props.history.push(Routes.about)}>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(ButtonAppBar);
