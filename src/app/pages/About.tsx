import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Paper,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

const styles = (theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium
  }
});

export interface Props extends WithStyles<typeof styles> {}

function About(props: Props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} style={{ margin: 16, padding: 16 }}>
        <Typography variant="h5" component="h3" style={{ marginBottom: 16 }}>
          Example of using some Material UI
        </Typography>
        <Typography component="p">Bellow you can see expansion panels</Typography>
      </Paper>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>First expansion panel</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Content of expansion panel</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Another expansion panel</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Let's make this content a bit longer using lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum faucibus eu odio quis aliquam. Donec dignissim diam nec felis semper volutpat. Curabitur
              lobortis, mi quis ultricies tincidunt, eros odio congue nibh, nec ultrices odio orci at sem. Duis maximus
              cursus ligula iaculis facilisis. Donec at odio nec nibh tristique accumsan quis quis sapien. Cras
              facilisis nunc et faucibus hendrerit. Curabitur ornare ut nulla sed aliquet. Praesent tempus orci et urna
              vehicula vulputate. Fusce eu lectus varius, scelerisque massa id, posuere elit. Quisque consequat, est non
              lobortis accumsan, libero ex venenatis diam, non efficitur quam diam consectetur mauris.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
