import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components'

import SearchBox from './SearchBox';

const Navbar = ({ onSearch }) => {
	const history = useHistory()
	const currentUser = JSON.parse(localStorage.getItem("currentUser"))
	return (
		<div style={{ display: 'flex', justifyContent: "space-between", margin: "25px 0" }}>
			<ul className='row' style={{ listStyle: "none", width: "40%", padding: 0 }}>
				<ListItem className="col">
					<NavLink to="/home">
						Movies
					</NavLink>
				</ListItem>

				<ListItem className="col">
					<NavLink to="/trending">
						Trending
					</NavLink>
				</ListItem>
				{currentUser && <ListItem className="col">
					<NavLink to="/favourites">
						Favourites
					</NavLink>
				</ListItem>}
				<ListItem className="col">
					<NavLink to="/top-rated">
						Top rated
					</NavLink>
				</ListItem>
			</ul>
			<SearchBox onSearchHandle={onSearch} />
			<span style={{ cursor: "pointer" }} onClick={() => {
				if (currentUser) {
					localStorage.removeItem("currentUser")
					history.go("/home")
				} else {
					history.push("/sign_up")
				}
			}}>
				{currentUser ? "Logout" : "Sign up"}
			</span>

		</div>
	);
};

const ListItem = styled.li`
	a, a:hover{
		color: #ffff;
		font-size: 18px;
		text-decoration: none;

		&.active{
			color: #48FB00;
		}
	}
   
`

export default Navbar;
