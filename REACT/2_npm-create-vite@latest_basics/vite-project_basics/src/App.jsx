import { Routes, Route } from "react-router-dom";
import { Counter, Exercises, Hello, Welcome, ShowGitHubUser } from "./Exercises";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/dev" element={<Exercises />} />
      <Route path="/welcome/:username" element={<Welcome />} />
      <Route
        path="/counter"
        element={
          <Counter initialValue={200} incrementAmount={4} decrementAmount={2} />
        }
      />
      <Route path="/users/:username" element={<ShowGitHubUser />} />
    </Routes>
  );
};
