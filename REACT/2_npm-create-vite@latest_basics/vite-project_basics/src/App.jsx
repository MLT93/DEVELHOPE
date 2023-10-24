import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import {
  Counter,
  Exercises,
  Hello,
  Welcome,
  ShowGitHubUser,
  NotFound,
  GitHubUsers,
} from "./Exercises";
import { TresEnRaya } from "./components/TresEnRaya/TresEnRaya";

export const App = () => {
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
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route exact path="/dev" element={<Exercises />} />
        <Route exact path="/welcome/:username" element={<Welcome />} />
        <Route
          exact
          path="/counter"
          element={
            <Counter
              initialValue={200}
              incrementAmount={4}
              decrementAmount={2}
            />
          }
        />
        <Route exact path="/users/:username" element={<ShowGitHubUser />} />
        <Route exact path="/tres-en-raya" element={<TresEnRaya />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/users/" element={<GitHubUsers />} />
      </Routes>
    </BrowserRouter>
  );
};
