import { Routes, Route } from "react-router-dom";
import { Counter, Exercises, Welcome } from "./Exercises";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Exercises />} />
      <Route path="/:username" element={<Welcome />} />
      <Route
        path="/counter"
        element={
          <Counter initialValue={200} incrementAmount={4} decrementAmount={2} />
        }
      />
    </Routes>
  );
};
