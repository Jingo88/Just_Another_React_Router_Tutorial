import React from 'react';
import AboutComponent from '../components/AboutComponent';

class AboutContainer extends React.Component{
  constructor(){
    super();
    this.state = {}
  }
	render(){
		return(
			<AboutComponent/>
		)
	}
}

export default AboutContainer;