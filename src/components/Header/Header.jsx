import { useDispatch } from "react-redux";
import { setLogout, setUserData } from "@/store/userSlice";

import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("logined");
    dispatch(setLogout());
    dispatch(setUserData({}));
  };

  return (
    <header className="header">
      <h1 className="page__title">Simple Hotel Check</h1>
      <button className="header__signOut-button" onClick={handleLogout}>
        <span className="button-text">Выйти</span>
      </button>
    </header>
  );
}
