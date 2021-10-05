import React, { useState, useEffect } from 'react'

import List from '../List'

const Favourites = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const favourite = JSON.parse(localStorage.getItem("favourites")) ? JSON.parse(localStorage.getItem("favourites")) : []
        setMovies(favourite.filter(f => f.user === currentUser.email))
    }, [])
    return <List title="Favourites" movies={movies} />
}


export default Favourites