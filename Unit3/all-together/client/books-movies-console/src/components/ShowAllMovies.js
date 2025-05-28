
import React, { Component } from 'react';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';
import MovieCard from './MovieCard';

class ShowAllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      //TODO: fill in the GET call below with the appropriate URL
      //look at routes
      .get('/movie')
      .then(res => {
        //TODO: Fill this in with the appropriate state information
        //from whatever the response is
        console.log(res.data)
        this.setState({
          movies: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAllMovies');
      })
  };


  render() {
    //get our list from our state
    const movies = this.state.movies;
    let moviesList;

    //determine what to render based on if our state is populated
    if(!movies) {
      moviesList = "There are no movies in the database yet";
    } else {
      //map our list from our state
      //see MovieCard for how we are rendering the Card
      moviesList = movies.map((movie, k) =>
        <MovieCard movieInfo={movie} key={k} />
      );
    }

    return (
      <div>
          <div>
              <br />
              <h2>Movies List</h2>
            <div>
              <Link to="/add-movie">
                + Add New Movie
              </Link>
              <br />
              <hr />
            </div>
          </div>
          <div>
                {moviesList}
          </div>
          <Outlet />
      </div>
    );
  }
}

export default ShowAllMovies;
