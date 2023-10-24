import { Routes, Route } from "react-router-dom";
import { Counter, Exercises, Hello, Welcome, ShowGitHubUser, NotFound } from "./Exercises";
import { TresEnRaya } from "./components/TresEnRaya/TresEnRaya";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route exact path="/dev" element={<Exercises />} />
      <Route exact path="/welcome/:username" element={<Welcome />} />
      <Route
        exact
        path="/counter"
        element={
          <Counter initialValue={200} incrementAmount={4} decrementAmount={2} />
        }
      />
      <Route exact path="/users/:username" element={<ShowGitHubUser />} />
      <Route exact path="/tres-en-raya" element={<TresEnRaya />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
