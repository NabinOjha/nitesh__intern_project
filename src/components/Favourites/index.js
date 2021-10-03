import React, { useState, useEffect } from 'react'

import List from '../List'

const Favourites = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const favourite = JSON.parse(localStorage.getItem("favourites")) ? JSON.parse(localStorage.getItem("favourites")) : []
        setMovies(favourite)
    }, [])
    return <List title="Favourites" movies={movies} />
}


export default Favourites