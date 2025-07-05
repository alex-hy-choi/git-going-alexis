import React, { Component } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import UrlCard from './UrlCard';

class ShowAllUrls extends Component {
  constructor(props) {
    super(props);
    this.state = { urls: [] };
  }

  componentDidMount() {
    axios
      .get('/url')
      .then(res => this.setState({ urls: res.data }))
      .catch(err => console.error('Error fetching URLs:', err));
  }

  render() {
    const { urls } = this.state;
    return (
      <div>
        <h1>LinkedIn Profiles</h1>
        <Link className="sublink add-new" to="/add-url">+ Add New URL</Link>
        <hr />
        {urls.length === 0 ? (
          <p>No URLs added yet.</p>
        ) : (
          urls.map((u, k) => <UrlCard key={k} urlInfo={u} />)
        )}
        <Outlet />
      </div>
    );
  }
}

export default ShowAllUrls;
