import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '50%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 'auto'
  },
  table: {
    width: '100%',
  },
});

function MaterialTableComponents(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
      <TableHead>
        <TableRow>
        <TableCell>Destination</TableCell>
        <TableCell align="right">Minutes</TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        {props.destinations.map((destination, index) => {
          return (
            <TableRow>
              <TableCell>{props.destination[index]}</TableCell>
                <TableCell align="right">{props.dueMins[index]}</TableCell>
          </TableRow>
        )})}
      </TableBody>
      </Table>
    </Paper>
  );
}

MaterialTableComponents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialTableComponents);