import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import List from '../List'


const SearchResults = () => {
    const { searchValue } = useParams()
    const [movies, setMovies] = useState([])
    useEffect(() => {

        const fetchMovies = async () => {
            const response = await fetch(` https://api.themoviedb.org/3/search/movie?api_key=ac4bcb177915d3b009211bdcc74fbd94&query=${searchValue}&language=en-US&page=1&include_adult=false`);
            const movies = await response.json()
            setMovies(movies.results || [])
        }
        fetchMovies()
    }, [searchValue])
    return <List title="Search" movies={movies} />
}





export default SearchResults