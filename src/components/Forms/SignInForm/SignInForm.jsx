import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";

import "./SignInForm.css";

import useForm from "@/hooks/useForm";
import useValidation from "@/hooks/useValidation";

export default function SignInForm({handleSignIn}) {
  const [handleValidation, errors] = useValidation();
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(event.target.checkValidity()) handleSignIn()
  };

  return (
    <form className="sign-in-form" noValidate onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Логин"
        type="email"
        required
        value={values.email}
        errorMessage={errors.email}
        onChange={(event) => {
          handleChange(event);

        }}
        onBlur={(event) => {
          handleValidation(event);
        }}
      />
      <Input
        id="password"
        label="Пароль"
        type="password"
        minLength="8"
        required
        value={values.password}
        errorMessage={errors.password}
        onChange={(event) => {
          handleChange(event);

        }}
        onBlur={(event) => {
          handleValidation(event);
        }}
      />
      <div className="submit-button-wrapper">
        <MainButton type="submit">Войти</MainButton>
      </div>
    </form>
  );
}
