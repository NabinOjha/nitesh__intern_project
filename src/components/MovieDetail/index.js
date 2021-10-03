import React from 'react'

import { useLocation } from 'react-router'
import Rating from 'react-star-ratings'
import styled from 'styled-components'

const MovieDetail = () => {
    const location = useLocation()
    const movie = location.state

    if (!movie) {
        return <div>Movie not found.</div>
    }

    return <Details>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='movie' style={{ width: "100%", height: "70vh" }} />
        <ExtraDetails>
            <RatingName>
                <span style={{ fontSize: 20, color: "#e3e33b", display: "inline-block", marginRight: 20, marginTop: 3 }}>
                    {movie.name || movie.title}
                </span>
                <Rating rating={movie.vote_average} starRatedColor="yellow" starDimension="20px"
                    starSpacing="3px" numberOfStars={10} isAggregateRating />
                <span style={{ margin: 10, display: "inline-block", marginTop: 13 }}>( {movie.vote_average} / 10 )</span>
            </RatingName>
            <div style={{ marginTop: 15, color: "red" }}>Release date : {movie.release_date}</div>
            <p style={{ marginTop: 15 }}>{movie.overview}</p>
        </ExtraDetails>
    </Details>
}


const Details = styled.div`
padding: 15px 0`,
    Image = styled.img``,
    ExtraDetails = styled.div``,
    RatingName = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    `


export default MovieDetail