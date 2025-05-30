import React, { Component } from 'react';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowAllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      //TODO: fill in the GET call below with the appropriate URL
      //look at routes
      .get('/book')
      .then(res => {
        //TODO: Fill this in with the appropriate state information
        //from whatever the response is
        console.log(res.data)
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAllBooks');
      })
  };


  render() {
    //get our list from our state
    const books = this.state.books;
    let booksList;

    //determine what to render based on if our state is populated
    if(!books) {
      booksList = "There are no books in the database yet";
    } else {
      //map our list from our state
      //see BookCard for how we are rendering the Card
      booksList = books.map((book, k) =>
        <BookCard bookInfo={book} key={k} />
      );
    }

    return (
      <div>
          <div>
              {/* <br /> */}
              <h1 >Books List</h1>
            <div>
              <Link class="sublink" to="/add-book">
                + Add New Book
              </Link>
              <br />
              <hr />
            </div>
          </div>
          <div>
                {booksList}
          </div>
          <Outlet />
      </div>
    );
  }
}

export default ShowAllBooks;
