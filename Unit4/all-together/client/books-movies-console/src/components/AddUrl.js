import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';

class AddUrl extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      submitted: null,
    };
  }

  onChange = e => {
    // Update state with the current value of the form input
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      url: this.state.url,
    };

    axios
      .post('/url/add', data)
      .then(res => {
        console.log(data);
        this.setState({
          url: data.url,
          submitted: true,
        });
      })
      .catch(err => {
        console.log('Error in AddUrl!');
        console.error(err);
      });
  };

  render() {
    const { submitted, url } = this.state;

    return (
      <div>
        <br />
        {submitted && <Navigate to="/show" replace={true} />}        
        <Link className="sublink" to="/show"> Back to Homepage</Link>
        <h2>Add URL</h2>
        <hr />
        <br />
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              type='url'
              placeholder='Enter URL'
              name='url'
              value={url}
              onChange={this.onChange}
              required
            />
          </div>
          <br />
          <button type='submit'>Click to submit</button>
        </form>
      </div>
    );
  }
}

export default AddUrl;
