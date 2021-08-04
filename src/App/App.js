import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../style.css'
import Home from '../views/Homeviews';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import NotFound from '../views/NotFound'
import Navigation from '../components/Navigation';

const backEnd = 'https://api.themoviedb.org/3/movie/550?api_key=26d7579ac8d617a173042d9392f38a12';
const HomePage = 'https://api.themoviedb.org/3/trending/all/day?api_key=26d7579ac8d617a173042d9392f38a12';
const FindMovies = 'https://api.themoviedb.org/3/search/movie?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US&page=1&query=запрос'
const InfoMovie = 'https://api.themoviedb.org/3/movie/тутID?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US'
const PageHuman = 'https://api.themoviedb.org/3/movie/тутID/credits?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US&language=en-US'
const ReviewsFilm = 'https://api.themoviedb.org/3/movie/тутID/reviews?api_key=26d7579ac8d617a173042d9392f38a12&language=en-US&page=1'







const App = () => (
    <>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/movies' component={MoviesPage} />
            <Route exact path='/movies/:movieId' component={MovieDetailsPage} />
            <Route exact path='/movies/:movieId/cast' component={Cast} />
            <Route path='/movies/:movieId/reviews' component={Reviews} />
            <Route component={NotFound} />
        </Switch>
    </>
)

export default App