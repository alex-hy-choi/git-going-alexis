import React from 'react';
import { Link } from 'react-router-dom';


function MovieCard ({ movieInfo }) {
    return(
        <div>
            <div className="card">
                <h2>
                  {/* Link will go to specified URL*/}
                  {/* Note ` ` quotes to be able to use movie info*/}
                  <Link className="mainlink" to={`/show-movie/${movieInfo.title}`} replace>
                      { movieInfo.title }
                  </Link>
                </h2>
                <h3>{movieInfo.director}</h3>
                <p>Rating: {movieInfo.rating}</p>
                <p>Book: {movieInfo.book ? 'Yes' : 'No'}</p>
                <p>Genre: {movieInfo.genre}</p>
                {/* <p>Review: {movieInfo.review}</p> */}
                <Link className="sublink" to={`/update-movie/${movieInfo._id}`} state={movieInfo}>
                    Update
                </Link>
                <Link className="sublink" to={`/delete-movie/${movieInfo._id}`} state={movieInfo}>
                    Delete
                </Link>
            </div>
        </div>
    )
};

export default MovieCard;
