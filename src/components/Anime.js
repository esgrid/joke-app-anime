import { useState, useEffect } from 'react'

function Anime() {

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

    return (
        <div>
            <h1>Anime Films</h1>
            <h2>Featured Film of the Month</h2>

            {/* if one uncomments lines 26-28 and one reloads the page the app breaks - why? */}

            {/* <h3>{anime[0].title}</h3>
            <h4>{anime[0].release_date}</h4>
            <p>{anime[0].description}</p> */}

            {
                anime.map(film => {
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

