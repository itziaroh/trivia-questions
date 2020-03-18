import React from 'react';
import style from './style';
import SearchInput from '../SearchInput/SearchInput';
import MainTable from '../MainTable/MainTable';
import PagButtons from '../Pagination/PagButtons';

const MainPage = props => {
  const { handleChange, handleSubmit, value, data } = props;
  const classes = style();

  return (
    <main className={classes.main}>
      <SearchInput handleChange={handleChange}
        handleSubmit={handleSubmit} value={value} />
      <MainTable data={data} />
      <PagButtons />
    </main>
  )
}

export default MainPage;