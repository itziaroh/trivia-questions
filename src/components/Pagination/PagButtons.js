import React from 'react';
import style from './style';
import styles from './style';
import Pagination from '@material-ui/lab/Pagination';

const PagButtons = props => {
  const classes = style();
  const classe = styles();

  const handleClick = (e, page) => {
    props.handleClick(page)
  }
  return (
    <div className={classes.root}>
      <Pagination
        onChange={handleClick}
        count={5}
        shape="rounded"
        className={classe.pags}
        hidePrevButton
        hideNextButton />
    </div>
  )
}

export default PagButtons