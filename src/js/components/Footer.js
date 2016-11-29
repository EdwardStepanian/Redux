import React from "react";


class Footer extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		counts : 0
	}
}
static proptypes = {
	name : React.PropTypes.String
}
static defaultProps = {
	name : 'Pigh'
}
render() {
	return (
		<footer>
     	 	    	There will be our footer part  { this.props.name }
		</footer>
    	);
 }
}
export default Footer