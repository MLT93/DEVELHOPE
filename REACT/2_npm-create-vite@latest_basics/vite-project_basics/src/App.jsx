import { Routes, Route } from 'react-router-dom';
import { Welcome } from './Exercises';

export const App = () => {
  return (
    <Routes>
      <Route path='/:username' element={<Welcome />} />
    </Routes>
  )
}
