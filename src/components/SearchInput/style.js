import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    '& > *': {
      width: 200,
      margin: '2rem'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  },
  select: {
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: 'white',
    height: '3.5rem'
  },
  typo: {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  }
}));