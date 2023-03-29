import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin, setUserData } from "@/store/userSlice";

import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";

import "./SignInForm.css";

import useForm from "@/hooks/useForm";
import useValidation from "@/hooks/useValidation";

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [handleValidation, errors] = useValidation();
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      localStorage.setItem("logined", true);
      dispatch(setLogin());
      dispatch(setUserData({ email: values.email }));
      navigate("/simple-hotel-check/");
    }
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
        pattern="^[^а-яё]+$"
        title="любые символы кроме кириллицы"
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
