import React from 'react';
import { Button, Icon, Typography } from '@material-ui/core';
import style from './style'

const NavButton = ({ btnTitle, icon }) => {
  const classes = style()
  return (
    <Button variant="contained" className={classes.btn}>
      <Icon className={classes.icon}>{icon}</Icon>
      <Typography variant="button">{btnTitle}</Typography>
    </Button>
  )
}

export default NavButton;