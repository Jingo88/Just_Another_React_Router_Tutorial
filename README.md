# Just Another React Tutorial EXTENDED

---

## How To Approach This Tutorial

* This tutorial is an extension of an Introductory React Tutorial that can be found here. [https://github.com/Jingo88/Just_Another_React_Tutorial](https://github.com/Jingo88/Just_Another_React_Tutorial)
* This tutorial is still in progress and will be up shortly.

## What We're Building

* This tutorial is an expansion of my first "Just Another React Tutorial" 
	* You can find the introduction here [https://github.com/Jingo88/Just_Another_React_Tutorial](https://github.com/Jingo88/Just_Another_React_Tutorial)
* We will be taking the code from the previous movie app we made, and refactoring many of the containers and components
* We will be adding new containers and components
* We will be created a router that will have these containers and components nested
* The user will search for a movie by a title
* All movies that relate to that title will be returned in JSON format
* The list of movies will be rendered on the page using React
* If a user clicks on a specific movie they will be shown the details of that movie

### Master Branch

### Branch 01 - Refactor Our Home Container

* FIRST: Please install React Router
	* `npm install --save react-router`
* We want to plan our containers to have the logic separated by different "pages" that the router will have. 
* The react-router will have all the containers attached to <Route> tags. 
* We'll cover the Route tags later, first thing's first, lets create a new file called `MovieListContainer.js`
* The Home Container will just be in charge of rendering the HomeComponent and handling the Users Movie Search Submission. 
* We can remove state and the `multiSearch` helper call from our `HomeContainer`
* We can remove the `MovieListComponent` from our `HomeComponent` 
* The two files will look like this
* HomeContainer.js

```
import React from 'react';
import HomeComponent from '../components/HomeComponent';
import {browserHistory, router} from 'react-router';


class HomeContainer extends React.Component{
  constructor(){
    super();
    this.state = {}
	this.handleUserSubmit = this.handleUserSubmit.bind(this)
  }
	handleUserSubmit(event){
		event.preventDefault();

		let movieTitle = $(event.target).find("input:text").val();
		browserHistory.push('/details/' + movieTitle)
		
	}
	render(){
		return(
			<HomeComponent 
				onUserSubmit = {this.handleUserSubmit}/>
		)
	}
}

export default HomeContainer;
```
* HomeComponent.js

```
import React from 'react';

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
```

* Great, we're not going to run `npm start` just yet, and go to our next branch
* But wait, so where is everything going?
* FIND OUT NEXT WEEK EPISODE OF DRAGONBALL Z. 
* Okay just kidding, we still have a lot of refactoring to do. 
* Our next branch will show us how the logic will look for our other containers

***NOTE***

* We imported `browserHistory` and `router` from react-router 
* This will help us to target other routes and go to another container/page
* We'll see how this fits later on in the tutorial.

### Branch 02 - Refactor our MovieDetailsContainer






### Branch 02 - Add Main Container and Router

### Branch 03 - Add About / Login / Loading











