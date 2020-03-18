import React from 'react';
import NavButton from '../NavButton/NavButton';
import style from './style';

const Nav = () => {

  const classes = style();

  return (
    <nav className={classes.nav}>
      <NavButton btnTitle={'BROWSE'} icon={'menu'} />
      <NavButton btnTitle={'ADD NEW QUESTIONS'} icon={'add'} />
      <NavButton btnTitle={'API'} icon={'settings'} />
      <NavButton btnTitle={'DISCUSS'} icon={'comment'} />
      <NavButton btnTitle={'LOGIN'} icon={'input'} />
    </nav>
  )
}

export default Nav;