import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Search from './Search/Search';

function App() {
  return (
    <Routes>
      <Route
        path="auth"
        element={<Auth />}
      />
      <Route
        path="/"
        element={<Search />}
      />
    </Routes>
  );
}

export default App;
