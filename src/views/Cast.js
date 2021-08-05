import React, { Component } from 'react';
const axios = require('axios');




class Cast extends Component {
    state = {
        casts: []
    }
    async componentDidMount() {
       const { movieId } = this.props.match.params;
       const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US&language=en-US`);
       this.setState({
           casts: respons.data.cast
       })
    }
    render() {
        return (
            <>
            <ul>
                {this.state.casts.map((num) => {
                    return (<li><img src={`https://image.tmdb.org/t/p/w200${num.profile_path}`} alt="images cast"/>
                        <p>Name: {num.name}</p>
                        <p>Character: {num.character}</p>
                    </li>)
                })}
            </ul>
            </>
        )
    }
}
export default Cast