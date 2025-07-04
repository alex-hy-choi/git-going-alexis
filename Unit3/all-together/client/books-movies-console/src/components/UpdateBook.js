import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import withRouter from "../withRouter.js";

class UpdateBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author:'',
      rating:0,
      movie:'',
      submitted: null,
    };
  }

  onChange = e => {
    //the target.name will refer to the form name= section
    //in the html form below (in the render)
    this.setState({ [e.target.name]: e.target.value });
  };
  onCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  onSubmit = e => {
    // console.log('params:', this.props.params);
    // console.log('params.id:', this.props.params?.id);
    e.preventDefault();

    //this is akin to making our JSON object
    //on postman
    const data = {
      title: this.state.title,
      author: this.state.author,
      rating: this.state.rating,
      movie: this.state.movie,
    };

    //now we use axios to communicate with our backend
    //look at routes.js in the backend
    //to know what
    console.log("Making PUT to:", `/book/update/${this.props.params.id}`);
    axios
      .put('/book/update/' + this.props.params.id, data)
      .then(res => {
        this.setState({
          title: '',
          author:'',
          rating:'',
          movie:'',
          submitted: true,
        })
        console.log("Submitting update for ID:", this.props.params.id);
      })
      .catch(err => {
        console.log(this.props.params.id);
        console.log("Error in UpdateBook!");
        console.error(err);
      })
  };

  render() {
    //seeing if we have submitted already
    console.log('params in render:', this.props.params);

    let submitted = this.state.submitted;
    return (
      <div>
        <br/>
        {/* Link will go to specified URL*/}
        <Link className="sublink" to="/show"> Back to Homepage</Link>
        {/* If submitted is true, also render <Navigate>
          which auto Navigates to the URL specified
          */
          submitted && (
          <Navigate to="/show" replace={true} />
        )}
        <h1 className="split-title">Update Book</h1>
        <hr/>
        <br/>
        {/* <p>Update new book</p> */}
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
          <label className='checkbox-label' htmlFor="rating"> Rating:  </label>
            <input
              type='number'
              // placeholder='Rating of Book'
              name='rating'
              id='rating'
              value={this.state.rating}
              onChange={this.onChange}
              min={0}
              max={10}
            />
          </div>
          <br />
          <div>
            <label className='checkbox-label' htmlFor="checking"> Movie? </label>
            <input
              type='checkbox'
              // placeholder='Movie? (T/F)'
              name='movie'
              id='checking'
              value={this.state.book}
              onChange={e => this.setState({ book: e.target.checked })}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Genre of Book'
              name='genre'
              value={this.state.genre}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              className='review'
              type='text'
              placeholder='Review of Book'
              name='review'
              value={this.state.review}
              onChange={this.onChange}
            />
          </div>
          <br />
          <br />
          <button type="submit">Click to submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateBook);
