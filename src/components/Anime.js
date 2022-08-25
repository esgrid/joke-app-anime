import {useState, useEffect} from 'react'

function Anime (){

    const [anime, setAnime] = useState([])

    const getAnime = async () => {

        const result = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await result.json()
        setAnime(data)
        console.log(anime)
    }

    useEffect(() => {
        getAnime()
    }, [])

    return(
        <div>
            <h1>Anime Films</h1>
            <h2>Featured Film of the Month</h2>

            {
                anime.map( film => {
                    return <>
                        <h3>{film.title}</h3>
                        <p>{film.description}</p>
                    </>
                }

                )
            }
        </div>
    )

}

export default Anime

