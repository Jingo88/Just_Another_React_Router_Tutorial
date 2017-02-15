import React from 'react';
import MovieListComponent from '../components/MovieListComponent';
import HomeContainer from './HomeContainer';

import { singleSearch, multiSearch} from '../helpers/helpers'; 

class MovieListContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			loading: true,
			movieInfo: {}
		}
		this.getMovies = this.getMovies.bind(this);
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
	render(){
		console.log(this.state);
		return (
			<div>
				<HomeContainer/>
				
				<MovieListComponent 
					loading = {this.state.loading}
					moviesInfo = {this.state.movies}/>
			</div>
			
		)
	}
}

export default MovieListContainer;


