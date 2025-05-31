import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function ShowMovie (props) {
  //let's us use our parameters
  //try logging params.email
  let params = useParams();
  //a way to access the state with
  //a function component. Eg.
  //https://www.w3schools.com/react/react_usestate.asp
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    console.log(params._id);
    axios
      //TODO: implement the correct URL in the get() call below
      .get(`/movie/title/${params.title}`)
      .then(response => {
        //saving the data to Post
        setPost(response.data);
        console.log(response.data);
        
      })
      .catch( err =>{
        console.log("Error from ShowMovie_get", err);
      });
  }, [params.title]);
  //if our post is null, don't return much.
  if(!post) return "Nothing was got";

  //if our post is populated, return actual information
  return(
    <div>
      <br/>
      {/* Link will go to specified URL*/}
      <Link className="sublink" to="/show"> Back to Homepage</Link>
      <div>
        <h1 className="split-title"> Title: {post.title}</h1>
        <hr/>
        <p> Director: {post.director}</p>
        <p> Rating: {post.rating}</p>
        <p> Book: {post.book ? 'Yes' : 'No'}</p>
        <p> Genre: {post.genre}</p>
        <p> Review: {post.review}</p>
      </div>
      {/* Link will go to specified URL*/}
      <Link className="sublink" to={`/update-movie/${post._id}`}> Edit Movie </Link>
      <Link className="sublink" to={`/delete-movie/${post._id}`}> Delete Movie </Link>
    </div>
  );

}
export default ShowMovie;
