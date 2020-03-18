import React from 'react';
import { Select, MenuItem, FormControl, Button, Typography, Icon } from '@material-ui/core';
import style from './style';

const SearchInput = props => {

  const classes = style();

  const handleChange = (e) => {
    props.handleChange(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit()
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <FormControl variant="outlined" className={classes.formControl} >
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          className={classes.select}
          value={props.value}
          onChange={handleChange}
        >
          <MenuItem value="any" defaultValue >Any difficulty</MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <Button size="large" type="submit" variant="contained" className={classes.btn}>
        <Icon>search</Icon>
        <Typography className={classes.typo} >SEARCH</Typography>
      </Button>
    </form>
  )
}

export default SearchInput;