import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import AddBook from "./components/AddBook"
import ShowAllBooks from "./components/ShowAllBooks"
import ShowBookByName from "./components/ShowBookByName"
import UpdateBook from "./components/UpdateBook"
import DeleteBook from "./components/DeleteBook"

import AddMovie from "./components/AddMovie"
import ShowAllMovies from "./components/ShowAllMovies"
import ShowMovieByName from "./components/ShowMovieByName"
import UpdateMovie from "./components/UpdateMovie"
import DeleteMovie from "./components/DeleteMovie"


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<App />}>
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
      </Route>
      <Route path="*" element={ <p>Uh oh! There's nothing here! </p>} />
    </Routes>
  </BrowserRouter>
);
