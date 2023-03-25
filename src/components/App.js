import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';

function App() {
  return (
    <Routes>
      <Route
        path="auth"
        element={<Auth/>}
      />
    </Routes>
  );
}

export default App;
