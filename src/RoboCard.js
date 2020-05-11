import React from "react";

const RoboCard = (props) => {
	return(
		props.robots.map((user,i) => {
			return (
				<div className="dib bg-light-green ma2 grow br3 pa4 bw2 shadow-5">
				<img alt="robots" src={`https://robohash.org/${i}`} />
				<h2>{props.robots[i].name}</h2>
				<p>{props.robots[i].email}</p>
				</div>
			)
		})
	)
};

export default RoboCard;