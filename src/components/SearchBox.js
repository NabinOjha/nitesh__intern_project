import React, { useState } from 'react';

import { useHistory } from 'react-router-dom'

const SearchBox = (props) => {
	const [searchValue, setSearchValue] = useState("")
	const history = useHistory()
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						history.push(`/search/${searchValue}`)
					}
				}}
				onChange={(e) => {
					setSearchValue(e.target.value)
				}}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;
