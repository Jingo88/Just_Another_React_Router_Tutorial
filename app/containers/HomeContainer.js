import React from 'react';
import HomeComponent from '../components/HomeComponent';
import {browserHistory, router} from 'react-router';

import {multiSearch} from '../helpers/helpers';


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