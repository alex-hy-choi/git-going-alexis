import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      director:'',
      rating: 0,
      book: '',
      genre: '',
      review: '',
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
      director: this.state.director,
      rating: Number(this.state.rating),
      book: this.state.book,
      genre: this.state.genre,
      review: this.state.review,
    };

    //now we use axios to communicate with our backend
    axios
      .post('/movie/add', data)
      .then(res => {
        //we clear our state and set submitted to true
        //in order to navigate back (see render)
        console.log(data);
        this.setState({
          title: data.title,
          director: data.director,
          rating: data.rating,
          book: data.book,
          genre: data.genre,
          review: data.review,
          submitted: true,
        })
      })
      .catch(err => {
        console.log("Error in AddMovie!");
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
          <Navigate to="/show-movie" replace={true} />
        )}
        <h2>Add Movie</h2>
        <p>Create new movie</p>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              type='text'
              placeholder='Title of Movie'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Director of Movie'
              name='director'
              value={this.state.director}
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
              placeholder='Book? (T/F)'
              name='book'
              value={this.state.book}
              onChange={e => this.setState({ book: e.target.checked })}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Genre of Movie'
              name='genre'
              value={this.state.genre}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Review of Movie'
              name='review'
              value={this.state.review}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type = 'submit'>Click to submit</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
