import { Outlet} from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1 id="title">Books & Movies!</h1>
      <h3>A log by Alexis Choi</h3>
      <Outlet />
    </div>

  );
}
