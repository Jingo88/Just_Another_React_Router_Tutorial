import React from 'react';
import MovieListComponent from '../components/MovieListComponent';
import HomeComponent from '../components/HomeComponent';

import { singleSearch, multiSearch} from '../helpers/helpers'; 

class MovieListContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			loading: true,
			movieInfo: {}
		}
		this.getMovies = this.getMovies.bind(this);
		this.handleUserSubmit = this.handleUserSubmit.bind(this);
	}
	componentDidMount(){
		this.getMovies(this.props.params.title)
	}
	componentWillReceiveProps(){
		this.getMovies(this.props.params.title)
	}
	getMovies(title){
		multiSearch(title)
			.then((data)=>{
				this.setState({
					loading: false,
					movies: data
				})
			})
	}
	handleUserSubmit(event){
		event.preventDefault();

		let movieTitle = $(event.target).find("input:text").val();

		// allows us to change the URL without reloading the page. 
		window.history.pushState('', movieTitle, "/details/" + movieTitle)
		
		this.setState({
			loading: true
		})
		this.getMovies(movieTitle);
	}
	render(){
		console.log(this.state);
		return (
			<div>
				<HomeComponent 
					onUserSubmit = {this.handleUserSubmit}/>
				
				<MovieListComponent 
					loading = {this.state.loading}
					moviesInfo = {this.state.movies}/>
			</div>
			
		)
	}
}

export default MovieListContainer;


