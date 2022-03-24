import React from "react";
import Loader from "../Loader";
import Movies from "../Movies";
import Search from "../Search";
export default class Main extends React.Component{
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=329ffa13&s=panda')
        .then(res => res.json())
        .then(data => this.setState(  {movies: data.Search }))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}`)
        .then(res => res.json())
        .then(data => this.setState(  {movies: data.Search }))
    }

    render() {
        return(
            <div className="container content">
                <Search searchMovies={this.searchMovies} />
                {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Loader /> }
            </div>
        )
    }
}