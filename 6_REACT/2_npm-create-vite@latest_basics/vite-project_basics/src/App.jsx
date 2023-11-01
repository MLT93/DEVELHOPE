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
import { SWRConfig } from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const App = () => {
  return (
    <SWRConfig value={{ fetcher }}>
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
              <Link to="/users/">Usuarios de GitHub</Link>
            </li>
            <li>
              <Link to="/tres-en-raya">Tres en raya</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index path="/" element={<Hello />} />
          <Route exact path="/dev" element={<Exercises />} />
          <Route path="/welcome/:username" element={<Welcome />} />
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
          <Route exact path="/tres-en-raya" element={<TresEnRaya />} />
          <Route path="*" element={<NotFound />} />
          <Route exact path="/users/:username" element={<ShowGitHubUser />} />
          <Route exact path="/users/" element={<GitHubUsers />}>
            <Route index element={<h2>Add a user and select it</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  );
};
