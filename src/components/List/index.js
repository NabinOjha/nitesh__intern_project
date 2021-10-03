import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import ListItem from './ListItem/index'


const List = ({ movies, title, max, more }) => {
    const getToPath = () => {
        if (title === "Trending") return "/trending"
        if (title === "Favourites") return "/favourites"
        if (title === "Top rated") return "/top-rated"
    }
    return <ListContainer>
        <ListHeader>
            <h4>{title}</h4>
            {more && movies.length > max && <Link to={getToPath()}>View More</Link>}
        </ListHeader>
        {movies.length ? <MoviesList>
            {movies.filter((i, index) => index < (max ? max : movies.length)).map((m) => <ListItem item={m} />)}
        </MoviesList> : <span>Sorry. Movies not found.</span>}
    </ListContainer>
}



const MoviesList = styled.ul`
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       grid-gap: 20px;
        padding: 0;
        justify-content: space-between;
        
  `
const ListContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 30px;
h4{
       font-size: 18px;
        color: #e3e33b;
        margin-bottom: 20px;
  }
`, ListHeader = styled.div`
display: flex;
justify-content: space-between;

a{
    color: #e3e33b;
    text-decoration: underline;
    padding: 10px;
}
`

export default List;