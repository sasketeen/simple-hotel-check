import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import Auth from './Auth/Auth';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Search from './Search/Search';

function App() {
  const navigate = useNavigate();
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  const handleSignIn = () => {
    localStorage.setItem("logined", true);
    setIsUserSignIn(true);
    navigate("/simple-hotel-check/");
  }

  useEffect(() => {
    const isSignIn = localStorage.getItem("logined");
    if (isSignIn) {
      setIsUserSignIn(true);
      navigate("/simple-hotel-check/", { replace: true });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/simple-hotel-check/"
        element={
          <ProtectedRoute
            isSignIn={isUserSignIn}
            element={Search}
          />
        }
      />
      <Route
        path="/simple-hotel-check/auth"
        element={<Auth handleSignIn={handleSignIn} />}
      />
    </Routes>
  );
}

export default App;
