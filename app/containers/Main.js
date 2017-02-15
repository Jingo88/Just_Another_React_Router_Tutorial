import React from 'react';
import {Link} from 'react-router';

var styles = {
	navBar: {
		backgroundColor: "#F2EFEA",
	},
	fontColor: {
		color: "#ED6A5A",
	},
	logo: {
		color: "#ED6A5A",
		fontWeight: "1.5em",
		fontSize: "1.5em"
	}
}

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		return(
			<div>
				<nav>
				  <div 
				  	className="nav-wrapper"
				  	style = {styles.navBar}>
				  	<Link 
				  		to='/'
				  		style={styles.logo}> 
				  		Movie Lister
				  	</Link>
				    
				    <ul 
				    	id="nav-mobile" 
				    	className="right hide-on-med-and-down">

				      <li><Link to='/' style={styles.fontColor}>Home</Link></li>
				      <li><Link to='/' style={styles.fontColor}>Login/Register</Link></li>
				      <li><Link to='/about' style={styles.fontColor}>About</Link></li>
				    </ul>
				  </div>
				</nav>
	        
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}		
}

export default Main;