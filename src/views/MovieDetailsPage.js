import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews'
const axios = require('axios');

class MovieDetailsPage extends Component {
    state = {
        movies: [],
        from: []
    }
    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US`);
        this.setState({
            movies: respons.data,
        })
    }
    componentDidUpdate() {
        try {
            this.setState({
                from: this.props.location.state.from
         })
        }
        catch {

        }
    }
    render() {
        return (
            <>
                <button type="button" onClick={() => {
                    try {
                        
                        setTimeout(() => {
                            this.props.history.push(this.state.from)
                        }, 300);
                    }
                    catch {
                        this.props.history.push({ pathname: "/" })
                    }
                }}>Back</button>
                <h1>{this.state.movies.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w300${this.state.movies.poster_path}`} alt="images movie"></img>
                <p>Additional information</p>
                <ul>
                    <li><Link  to={`${this.props.match.url}/cast`}>Cast</Link></li>
                    <li><Link to={`${this.props.match.url}/reviews`}>Reviews</Link></li>
                </ul>
                <Route path={`${this.props.match.path}/cast`} component={Cast} />
                <Route path={`${this.props.match.path}/reviews`} component={Reviews}/>
            </>
        )

    }
}
export default MovieDetailsPage