import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function ShowBook (props) {
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
      .get(`/book/title/${params.title}`)
      .then(response => {
        //saving the data to Post
        setPost(response.data);
        console.log(response.data);
        
      })
      .catch( err =>{
        console.log("Error from ShowBook_get", err);
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
        <p> Author: {post.author}</p>
        <p> Rating: {post.rating}</p>
        <p>Movie: {post.movie ? 'Yes' : 'No'}</p>
        <p> Genre: {post.genre}</p>
        <p> Review: {post.review}</p>
      </div>
      {/* Link will go to specified URL*/}
      <Link className="sublink" to={`/update-book/${post._id}`}> Edit Book </Link>
      <Link className="sublink" to={`/delete-book/${post._id}`}> Delete Book </Link>
    </div>
  );

}
export default ShowBook;
