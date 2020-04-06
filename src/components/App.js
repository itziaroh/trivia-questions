import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../app.css'
import Nav from './Nav/Nav';
import MainPage from './MainPage/MainPage';

const App = () => {

  const [data, setData] = useState([]);
  const [difficulty, setDifficulty] = useState('any');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10)

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=50')
      .then(res => {
        setData(res.data.results)
      })
  }, []);

  const handleChange = (value) => {
    setDifficulty(value)
  }

  const handleSubmit = () => {
    if (difficulty === 'any') {
      axios.get('https://opentdb.com/api.php?amount=50')
        .then(res => {
          setData(res.data.results)
        })
    } else {
      axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`)
        .then(res => {
          setData(res.data.results)
        })
    }
  }

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = data.slice(indexOfFirstResult, indexOfLastResult)

  const handleClick = value => {
    setCurrentPage(value)
    console.log(currentPage)
  }

  return (
    <div className="App">
      <Nav />
      <MainPage currentResults={currentResults}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        value={difficulty}
      />
    </div>
  );
}

export default App;
