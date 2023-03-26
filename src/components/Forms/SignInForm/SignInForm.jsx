import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";

export default function SignInForm() {
  return (
    <form className="sign-in-form" noValidate>
      <Input
        id="email"
        label="Логин"
        type="email"
        required
        onChange={() => {
        }}
      />
      <Input
        id="password"
        label="Пароль"
        type="password"
        minLength="8"
        required
        onChange={() => {
        }}
      />
      <div className="submit-button-wrapper">
        <MainButton type="submit">Войти</MainButton>
      </div>
    </form>
  );
}
