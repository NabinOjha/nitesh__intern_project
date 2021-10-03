import React, { useEffect, useState } from 'react'

import List from "../List/index"


const Home = () => {
    const [trending, setTrending] = useState([])
    const [topRated, setTopRated] = useState([])
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const trendingResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=ac4bcb177915d3b009211bdcc74fbd94`);
            const topRatedResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ac4bcb177915d3b009211bdcc74fbd94`);
            const trending = await trendingResponse.json()
            const topRated = await topRatedResponse.json()
            const favourite = JSON.parse(localStorage.getItem("favourites")) ? JSON.parse(localStorage.getItem("favourites")) : []
            setFavourites(favourite)
            setTrending(trending.results || [])
            setTopRated(topRated.results || [])
        }
        fetchMovies()
    }, [])
    return <>
        <List title="Trending" movies={trending} max={8} more />
        <List title="Top rated" movies={topRated} max={8} more />
        {favourites.length ? <List title="Favourites" movies={favourites} max={8} more /> : null}

    </>
}


export default Home