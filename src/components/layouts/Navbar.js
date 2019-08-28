import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';

const Navbar = ({checkApi}) => {
    return (
        <div className="container">
            <nav className="row py-3 navbar">
                <div className="col-4 col-md-6 logo">
                    <Link
                        to={'/'}
                        className=""
                    >
                        <span>u</span>Movies
                    </Link>
                </div>

                <div className="col-8 col-md-6">
                    <div className="row justify-content-between align-items-center ">
                        <div className="col col-md-5">
                            <Link 
                                to={'/'}
                                className=""
                            >
                                <Search 
                                    checkApi={checkApi}
                                /> 
                            </Link>
                        </div>

                        <div className="col col-md-3">
                            <Link 
                                to={'/movies'}
                                className=""
                            >
                                Movies 
                            </Link>
                        </div>

                        <div className="col col-md-3">
                            <Link 
                                to={'/movies/my'}
                                className=""
                            >
                                My List 
                            </Link>
                        </div>

                        
                    </div>
                </div>
            </nav>
        </div>
       
    );
}

export default Navbar;