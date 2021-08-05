import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../style.css'
import Home from '../views/Homeviews';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Reviews from '../views/Reviews';
import NotFound from '../views/NotFound'
import Navigation from '../components/Navigation';



const App = () => (
    <>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/movies/:movieId' component={MovieDetailsPage} />
            <Route path='/movies/:movieId/reviews' component={Reviews} />
            <Route path='/movies' component={MoviesPage} />
            <Route component={NotFound} />
        </Switch>
    </>
)

export default App