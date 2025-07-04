import { Outlet} from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <div  id="topbar">
        <h1 id="title">Books & Movies!</h1>
        <h3>A log by Alexis Choi</h3>
      </div>
      {/* <br/> */}
      <Outlet />
    </div>

  );
}
