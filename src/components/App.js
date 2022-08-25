import {useState, useEffect} from 'react'

function App() {

  const [jokes, setJokes] = useState([])

  const getJokes = async () => {

    const result = await fetch('https://v2.jokeapi.dev/joke/Programming?amount=10&safe-mode')
    const jokes = await result.json()
    setJokes(jokes.jokes)

  }


  useEffect(() => {
    getJokes()
  }, [])


  return (
    <div>
        <h1>Programming Jokes</h1>
        {

          jokes.map( (joke, key) => {

            let title = () => <h2>Joke No. {key + 1}</h2>
            let displayJoke = () => joke.type === 'twopart' ?
            <div>
              <p>{joke.setup}</p>
              <p>{joke.delivery}</p>
            </div>
          :
          <p>{joke.joke}</p>

          return <>
          
            {title()}
            {displayJoke()}

          </>
            }
          )

        }
    </div>
  );
}

export default App;
