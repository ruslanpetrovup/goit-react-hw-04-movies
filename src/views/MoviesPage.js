import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
const axios = require('axios');

class MoviesPage extends Component{
    state = {
        valueSeach: '',
        movies: []
    }
    componentDidMount() {
        this.setState({
            valueSeach: this.props.location.search.split('').splice(1).join('')
        })
    }
    async componentDidUpdate() {
       const respons = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US&page=1&query=${this.state.valueSeach}`);
       this.setState({
           movies: respons.data.results
       })
    }
    findMovie = (event) => {
        event.preventDefault();
        this.setState({
            valueSeach: event.target[0].value
        })
    }
    render() {
        return (
        <>
            <form onSubmit={this.findMovie}>
                <input type="text"/>
                <button type="submit">Find</button>
            </form>
            {this.state.movies.length > 0 && <ul>
                    {this.state.movies.map(num => {
                        return (<Link to={{
                            pathname: `${this.props.match.url}/${num.id}`,
                            state: {
                                from: { ...this.props.location, search: `${this.state.valueSeach}` }
                                
                            }
                        }}><li>{num.title}</li></Link>)
                })}
            </ul>}
        </>
    )
    }
}

export default withRouter(MoviesPage)