import React from 'react';

const Movie = ({movieInfo}) => {

    const { id, backdrop_path, title, overview, release_date, vote_average } = movieInfo;  

    let imgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;    

    return (
        <div className="card text-white border-0 movie-info">
            <img src={imgUrl} alt={title} className="img-fluid card-img" />
            <div className="card-img-overlay p-0">
                <p className="card-title badge badge-danger ml-2 mt-2">{release_date}</p>
            </div>
            <div className="card-body bg-dark d-flex justify-content-between align-items-center">
                <h3>{title}</h3>
                <p className=">card-text badge badge-warning mr-2  mb-0">{vote_average}</p>
            </div>
        </div>
    );
    
    
}

export default Movie;