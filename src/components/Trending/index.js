import React, { useState, useEffect } from 'react'

import List from '../List'

const Favourites = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const trendingResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=ac4bcb177915d3b009211bdcc74fbd94`);
            const trending = await trendingResponse.json()
            setMovies(trending.results || [])
        }
        fetchMovies()
    }, [])
    return <List title="Trending" movies={movies} />
}


export default Favourites