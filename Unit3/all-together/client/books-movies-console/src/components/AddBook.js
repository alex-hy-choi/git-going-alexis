import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author:'',
      rating: 0,
      movie: false,
      submitted: null,
    };
  }

  onChange = e => {
    //the target.name will refer to the form name= section
    //in the html form below (in the render)
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    //this is akin to making our JSON object
    //on postman
    const data = {
      title: this.state.title,
      author: this.state.author,
      rating: Number(this.state.rating),
      movie: this.state.movie,
    };

    //now we use axios to communicate with our backend
    axios
      .post('/book/add', data)
      .then(res => {
        //we clear our state and set submitted to true
        //in order to navigate back (see render)
        console.log(data);
        this.setState({
          title: data.title,
          author: data.author,
          rating: data.rating,
          movie: data.movie,
          submitted: true,
        })
      })
      .catch(err => {
        console.log("Error in AddBook!");
        console.error(err);
      })
  };

  render() {
    let submitted = this.state.submitted;
    return (
      <div>
        {/* If submitted is true, also render <Navigate>
          which auto Navigates to the URL specified
          */
          submitted && (
          <Navigate to="/show" replace={true} />
        )}
        <h2>Add Book</h2>
        <p>Create new book</p>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              type='text'
              placeholder='Title of Book'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Author of Book'
              name='author'
              value={this.state.author}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='number'
              min='0'
              max='5'
              placeholder='Rating'
              name='rating'
              value={this.state.rating}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='checkbox'
              placeholder='Movie? (T/F)'
              name='movie'
              value={this.state.movie}
              onChange={e => this.setState({ movie: e.target.checked })}
            />
          </div>
          <br />
          <button type = 'submit'>Click to submit</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
