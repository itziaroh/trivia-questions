import React from 'react';
import style from './style';
import styles from './style';
import Pagination from '@material-ui/lab/Pagination';

const PagButtons = () => {
  const classes = style();
  const classe = styles()
  return (
    <div className={classes.root}>
      <Pagination count={5} shape="rounded" className={classe.pags} hidePrevButton hideNextButton />
    </div>
  )
}

export default PagButtons