import AppBar from '@material-ui/core/AppBar';
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';

import { Routes } from '../../App';
import { history } from '../store/configure-store';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleTabs extends React.Component<Props> {
  public render() {
    const { classes, route } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant={'fullWidth'}
            value={this.getTabIndex(route)}
            onChange={(event, value) => this.changeRoute(event, value)}
          >
            <Tab label="All" />
            <Tab label="Completed" />
            <Tab label="Uncompleted" />
          </Tabs>
        </AppBar>
      </div>
    );
  }

  private getTabIndex(route: Routes) {
    switch (route) {
      case Routes.completed:
        return 1;
      case Routes.uncompleted:
        return 2;
      case Routes.all:
      default:
        return 0;
    }
  }

  private getRoute(index: number) {
    switch (index) {
      case 1:
        return Routes.completed;
      case 2:
        return Routes.uncompleted;
      case 0:
      default:
        return Routes.all;
    }
  }

  private changeRoute(event: React.ChangeEvent<{}>, index: number) {
    history.push(this.getRoute(index));
  }
}

export interface Props extends WithStyles<typeof styles> {
  route: Routes;
}

export default withStyles(styles)(SimpleTabs);
