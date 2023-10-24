import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul
          style={{
            display: "inline-flex",
            justifyContent: "space-evenly",
            width: "100%",
            padding: "20px",
          }}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/counter">Contador</Link>
          </li>
          <li>
            <Link to="/users/MLT93">Usuario de GitHub</Link>
          </li>
          <li>
            <Link to="/tres-en-raya">Tres en raya</Link>
          </li>
        </ul>
      </nav>
      <App />
    </BrowserRouter>
  );
};
