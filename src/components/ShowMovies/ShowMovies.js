import React, { Component } from 'react'
import Movie from './Movie';

class ShowMovies extends Component {
    state = {  }

    

    render() { 
        if (this.props.movies.length === 0) return null;
        
        return (  
            <div className="container">
                <div className="row movies-founded">
                    {this.props.movies.map(movie => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                            <Movie 
                                key={movie.id}
                                movieInfo={movie}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default ShowMovies;