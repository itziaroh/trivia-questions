import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow, } from '@material-ui/core';

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#2C2C2C',
  },
  body: {
    fontSize: '0.875rem',
  },
  root: {
    color: 'white',
    textAlign: 'left',
    border: '1px white solid',

  }
}))(TableCell);

export const StyledTableRow = withStyles(() => ({
  root: {
    backgroundColor: '#1B1B1B',
    textTransform: 'capitalize',
  },
}))(TableRow);

export default makeStyles({
  table: {
    minWidth: 600,
  },
  typo: {
    color: 'white',
    fontSize: '2rem',
    marginTop: '1.5rem'
  }
});