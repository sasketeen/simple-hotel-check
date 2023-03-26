import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="page__title">Simple Hotel Check</h1>
      <button className="header__signOut-button">
        <span className="button-text">Выйти</span>
      </button>
    </header>
  );
}
