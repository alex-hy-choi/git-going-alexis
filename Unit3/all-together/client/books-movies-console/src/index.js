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



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<App />}>
        <Route path="show" element={<ShowAllBooks />}  />
        <Route path='show/:title' element={<ShowBookByName />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="update-book/:id" element={<UpdateBook />} />
      </Route>
      <Route path="*" element={ <p>Uh oh! There's nothing here! </p>} />
    </Routes>
  </BrowserRouter>
);
