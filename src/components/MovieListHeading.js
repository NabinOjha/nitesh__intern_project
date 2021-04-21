import React from 'react';
const MovieListHeading = (props) => {
	return (
		<div className='col' style={{paddingTop:"200px",paddingLeft:"600px",color:"rgb(153,0,0)"}}>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;