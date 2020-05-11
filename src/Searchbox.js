import React from "react";

const Searchbox = (props) =>
{ 
	return (
		<div className="ma2">
		<input className="pa3 br4 athelas bg-lightest-blue" 
		type="search" 
		placeholder="search robots" 
		onChange={props.searchChange} />
		</div>
	)
}

export default Searchbox;