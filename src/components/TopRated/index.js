import React, { useState, useEffect } from 'react'

import List from '../List'

const TopRated = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ac4bcb177915d3b009211bdcc74fbd94`);
            const movies = await response.json()
            setMovies(movies.results)
        }
        fetchMovies()
    }, [])
    return <List title="Top rated" movies={movies} />
}


export default TopRated