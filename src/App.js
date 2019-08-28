import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import ShowMovies from './components/ShowMovies/ShowMovies';

class App extends Component {

   apiKey = '0950220091b1e01c01c59e9396b36e2a';
   
   state = {
      movies: []
   }

   checkApi = async (search) => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${search}&include_adult=false`;
      const response = await fetch(url);
      const data = await response.json();
      //guardar las peliculas que tengan imagen
      const movies = data.results.filter(movie => {
         return movie.backdrop_path !== null;
      });

      this.setState({
         movies: movies
      });
   }

   render() {
      return (
         <Router>
            <Navbar 
               checkApi={this.checkApi}
            />
            <Switch>

               <Route exact path="/" render={() => (
                  <ShowMovies 
                     movies={this.state.movies}
                  />
               )}
               />
            </Switch>
         </Router>
      );
   }
}

export default App;
