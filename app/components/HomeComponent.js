import React from 'react';

import MovieListComponent from './MovieListComponent';

const styles = {
	centering: {
		textAlign: 'center'
	}
}

function HomeComponent(props){

	return(
		<div className="container" style={styles.centering}>
			<h1>Welcome to Movie Search!</h1>
			<div className="row">
		    <form 
		    	className="col s10 offset-s2 m4 offset-m4"
		    	onSubmit = {props.onUserSubmit}>
		    	<input 
		    		placeholder="Enter Movie or TV Show Title" 
		    		type="text"
		    		className="validate"/>
		    	<input 
		    		type="submit"
		    		hidden/>
		    </form>
		  </div>
		  
		</div>
	)
}

export default HomeComponent;