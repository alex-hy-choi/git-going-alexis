import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import withRouter from "../withRouter.js";

class DeleteUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDelete: false,
      submitted: false,
      url: props.location?.state?.url || "",
    };
  }

  componentDidMount() {
    const id = this.props.params?.id;
    if (!this.state.url && id) {
      axios.get(`/url/${id}`)
        .then(res => {
          this.setState({ url: res.data.url });
        })
        .catch(err => console.error('Error fetching URL doc:', err));
    }
  }

  onCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.confirmDelete) {
      alert('Please confirm deletion by checking the box.');
      return;
    }

    const id = this.props.params.id;
    axios.delete(`/url/${id}`)
      .then(() => this.setState({ submitted: true }))
      .catch(err => console.error('Error deleting URL:', err));
  };

  render() {
    if (this.state.submitted) return <Navigate to="/show-url" replace={true} />;

    return (
      <div>
        <br />
        <Link className="sublink" to="/show-url">Back to URLs List</Link>
        <h1 className="split-title">Deleting URL: {this.state.url || '...'}</h1>
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
          <br />
          <button type="submit">Delete URL</button>
        </form>
      </div>
    );
  }
}

export default withRouter(DeleteUrl);
