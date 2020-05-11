import React, { Component } from "react";
import RoboCard from "./RoboCard";
import {robots} from "./robots";
import Searchbox from "./Searchbox";
import Scroller from "./Scroller";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield:""
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const filterRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className="tc">
			<h1>ROBOFRIENDS</h1>
			<Searchbox searchChange={this.onSearchChange} />
			<Scroller>
			<RoboCard robots={filterRobots}/>
			</Scroller>
			
		</div>
	);
	}
}

export default App;