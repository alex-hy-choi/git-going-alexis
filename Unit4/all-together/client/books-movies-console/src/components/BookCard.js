import React from 'react';
import { Link } from 'react-router-dom';


function BookCard ({ bookInfo }) {
    return(
        <div>
            <div className="card">
                <h2>
                  {/* Link will go to specified URL*/}
                  {/* Note ` ` quotes to be able to use book info*/}
                  <Link  className="mainlink" to={`/show-book/${bookInfo.title}`} replace>
                      { bookInfo.title }
                  </Link>
                </h2>
                <h3>{bookInfo.author}</h3>
                <p>Rating: {bookInfo.rating}</p>
                <p>Movie: {bookInfo.movie ? 'Yes' : 'No'}</p>
                <p>Genre: {bookInfo.genre}</p>
                {/* <p>Review: {bookInfo.review}</p> */}
                <Link className="sublink" to={`/update-book/${bookInfo._id}`} state={bookInfo}>
                    Update
                </Link>
                <Link className="sublink" to={`/delete-book/${bookInfo._id}`} state={bookInfo}>
                    Delete
                </Link>
            </div>
        </div>
    )
};

export default BookCard;
