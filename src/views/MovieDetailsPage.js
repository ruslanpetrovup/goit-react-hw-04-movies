import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router';
const axios = require('axios');

class MovieDetailsPage extends Component {
    state = {
        movies: []
    }
    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US`);
        this.setState({
            movies: respons.data
        })
    }
    render() {
        console.log(this.state.movies)
        return (
            <>
                <h1>{this.state.movies.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w300${this.state.movies.poster_path}`}></img>
                <p>Additional information</p>
                <ul>
                    <Link to={`${this.props.match.url}/cast`}>Cast</Link>
                    <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
                </ul>
            </>
        )

    }
}
export default MovieDetailsPage