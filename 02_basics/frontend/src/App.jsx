import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  })

  return (
    <>
      <h1>Hello World</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.joke}</p>
            </div>
          ))
      }
    </>
  )
}


export default App