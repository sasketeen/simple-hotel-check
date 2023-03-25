import "./Auth.css";
import Card from "@c/Card/Card.jsx";
import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";

export default function Auth() {
  return (
    <div className="auth-layout">
      <Card className="auth-card">
        <h1 className="auth-card__title">Simple Hotel Check</h1>
        <form className="auth-card__form" noValidate>
          <Input
            id="email"
            label="Логин"
            type="email"
            required
            onChange={() => {
              console.log(1);
            }}
          />
          <Input
            id="password"
            label="Пароль"
            type="password"
            minLength="8"
            required
            onChange={() => {
              console.log(1);
            }}
          />
          <div className="submit-button-wrapper">
            <MainButton type="submit">Войти</MainButton>
          </div>
        </form>
      </Card>
    </div>
  );
}
