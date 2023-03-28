import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Route, Routes } from "react-router-dom";
import { setLogin } from '@/store/userSlice';

import Auth from '@c/Auth/Auth';
import ProtectedRoute from '@c/ProtectedRoute/ProtectedRoute';
import Search from '@c/Search/Search';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    const isSignIn = localStorage.getItem("logined");
    if (isSignIn) {
      navigate("/simple-hotel-check/", { replace: true });
      dispatch(setLogin())
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/simple-hotel-check/"
        element={
          <ProtectedRoute
            element={Search}
          />
        }
      />
      <Route
        path="/simple-hotel-check/auth"
        element={<Auth/>}
      />
    </Routes>
  );
}

export default App;
