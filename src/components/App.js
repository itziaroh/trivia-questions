import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../app.css'
import Nav from './Nav/Nav';
import MainPage from './MainPage/MainPage';

const App = () => {

  const [data, setData] = useState([]);
  const [difficulty, setDifficulty] = useState('any');

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setData(res.data.results)
      })
  }, []);

  const handleChange = (value) => {
    setDifficulty(value)
  }

  const handleSubmit = () => {
    if (difficulty === 'any') {
      axios.get('https://opentdb.com/api.php?amount=10')
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

  return (
    <div className="App">
      <Nav />
      <MainPage data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={difficulty}
      />
    </div>
  );
}

export default App;
