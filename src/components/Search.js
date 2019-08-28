import React, { Component} from 'react';

class Search extends Component {

    state = {
        movie: '',
        error: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        const { movie } = this.state;
        if (movie === '' || /\s+$/.test(movie)) {
            //show error
            this.setState({
                error: true
            });
            return;
        }

        this.setState({
            error: false
        });

        this.props.checkApi(this.state.movie);
    }

    render() {
        return (
            <form
                className="seeker-form"
            >
                <input 
                    type="text" 
                    className="seeker"
                    name="movie"
                    placeholder="Buscar peliculas"
                    onChange={this.handleChange}
                />
                <button 
                    type="submit" 
                    className="btn-submit" 
                    onClick={this.handleClick}>
                        <i className="fas fa-search"></i>
                </button>
            </form>
        );
    }
}

export default Search;