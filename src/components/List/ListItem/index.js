import React from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router'


const ListItem = ({ item }) => {
    const favourite = JSON.parse(localStorage.getItem("favourites")) ? JSON.parse(localStorage.getItem("favourites")) : []

    const history = useHistory()
    return <ItemContainer style={{ position: "relative" }} onClick={() => {
        history.push({ pathname: `/movies/${item.name}`, state: item })
    }}>
        <Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt='movie' style={{ width: "100%", height: 350 }} />
        <MovieDetails>
            <span>{item.name || item.title}</span>
            <span>Rating: {item.vote_average}/10</span>
            <div>
                <span style={{ cursor: "pointer", marginRight: 10, display: "inline-block" }}>Add to favourite</span>
                <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    class='bi bi-heart-fill'
                    fill={favourite.find(i => i.id === item.id) ? "red" : "yellow"}
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                        onClick={(e) => {
                            e.stopPropagation()
                            if (favourite.find(i => i.id === item.id)) {
                                localStorage.setItem("favourites", JSON.stringify(favourite.filter(i => i.id !== item.id)))
                            } else {
                                localStorage.setItem("favourites", JSON.stringify([...favourite, item]))
                            }
                            history.go(0)
                        }}
                    />
                </svg>
            </div>
        </MovieDetails>
        <div
            onClick={() => {
                console.log("Movie click")
            }}

        >
        </div>
    </ItemContainer>
}


const ItemContainer = styled.div`
    &:hover{
        cursor: pointer;
    }
`, Image = styled.img`

`
const MovieDetails = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  background-color: rgba(0, 33, 96, .3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  &:hover{
      opacity: 1;
      transform: translateY(0);
  }
  & > * {
      padding:  5px 10px;
  }

`


export default ListItem