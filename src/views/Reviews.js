import React, { Component } from 'react';
import '../style.css'
const axios = require('axios');


class Rewiews extends Component {
    state = {
        rewie: []
    }
   async componentDidMount() {
        const { movieId } = this.props.match.params;
       const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US&page=1`) 
    this.setState({
           rewie: respons.data.results
       })
    }
    render() {
        return (
            <ul>
                {this.state.rewie.map((num) => {
                    return (<li className="itemAuthor"><p className="titleAuthor">Author: {num.author}</p>
                        <p>{num.content}</p>
                    </li >)
                })}
            </ul>
        )
    }
}
export default Rewiews