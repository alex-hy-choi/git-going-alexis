import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import withRouter from "../withRouter.js";

class UpdateMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDelete: false,
      submitted: false,
    };
  }

  
  onCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  onSubmit = e => {
    console.log('params:', this.props.params);
    console.log('params.id:', this.props.params?.id);
    e.preventDefault();

    //now we use axios to communicate with our backend
    //look at routes.js in the backend
    //to know what
    console.log("Making DELETE to:", `/movie/update/${this.props.params.id}`);
    axios
      .delete('/movie/' + this.props.params.id)
      .then(res => {
        console.log("Deleting object with ID:", this.props.params.id);
        this.setState({ submitted: true });
      })
      .catch(err => {
        console.log(this.props.params.id);
        console.log("Error in DeleteMovie!");
        console.error(err);
      })
  };

  render() {
    if (this.state.submitted) {
      return <Navigate to="/show" replace={true} />;
    }

    return (
      <div>
        <Link to="/show">Back to Movies List</Link>
        <h2>Delete Movie</h2>
        <form noValidate onSubmit={this.onSubmit}>
          <label>
            Are you sure you want to delete?
            <input
              type="checkbox"
              name="confirmDelete"
              checked={this.state.confirmDelete}
              onChange={this.onCheckboxChange}
            />
          </label>
          <br />
          <button type="submit">Delete Movie</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateMovie);
