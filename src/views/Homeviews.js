import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

class Home extends Component {
    state = {
        homelist: []
    }
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=26d7579ac8d617a173042d9392f38a12').then(respons => {
            this.setState({
                homelist: respons.data.results
            })
        });
    }

    render() {
        return (
            <>
                <h1>Trending today</h1>

                <ul>
                    {this.state.homelist.map((num) => {
                        return (<li key={num.id}><Link to={{pathname: `/movies/${num.id}`,
                            state: {
                            from: {pathname: this.props.location.pathname}
                        }}}>{num.title}</Link></li>)
                    })}
                </ul>
            </>)
    }
}
export default Home