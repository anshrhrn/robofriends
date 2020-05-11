import React from "react";

class Scroller extends React.Component {
	render() {
	return(
		<div style={{overflowY:"scroll", height:"720px"}}>
		{this.props.children}
		</div>
	)
}
}

export default Scroller;