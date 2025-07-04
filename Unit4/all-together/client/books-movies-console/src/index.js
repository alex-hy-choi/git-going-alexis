import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css"

import App from "./App.js";
import Homepage from "./components/Homepage.js"

import AddBook from "./components/AddBook.js"
import ShowAllBooks from "./components/ShowAllBooks.js"
import ShowBookByName from "./components/ShowBookByName.js"
import UpdateBook from "./components/UpdateBook.js"
import DeleteBook from "./components/DeleteBook.js"

import AddMovie from "./components/AddMovie.js"
import ShowAllMovies from "./components/ShowAllMovies.js"
import ShowMovieByName from "./components/ShowMovieByName.js"
import UpdateMovie from "./components/UpdateMovie.js"
import DeleteMovie from "./components/DeleteMovie.js"
import AddUrl from "./components/AddUrl.js"


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<App />}>
        <Route path="/show" element= {<Homepage />}/>

        <Route path="show-book" element={<ShowAllBooks />}  />
        <Route path='show-book/:title' element={<ShowBookByName />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="update-book/:id" element={<UpdateBook />} />
        <Route path="delete-book/:id" element={<DeleteBook />} />

        <Route path="show-movie" element={<ShowAllMovies />}  />
        <Route path='show-movie/:title' element={<ShowMovieByName />} />
        <Route path="add-movie" element={<AddMovie />} />
        <Route path="update-movie/:id" element={<UpdateMovie />} />
        <Route path="delete-movie/:id" element={<DeleteMovie />} />

        <Route path="/add-url" element={<AddUrl />} />
      </Route>
      <Route path="*" element={ <p>Uh oh! There's nothing here! </p>} />
    </Routes>
  </BrowserRouter>
);
