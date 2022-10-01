import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logoHeader from "../../images/logo.svg";
import { MovieContext } from "../../context/MovieContext.js";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import { Validation } from "../../context/Validation.js";
import { errorMessages } from "../../utils/config.js";
import mainApi from "../../utils/MainApi.js";
import { checkValidation } from "../../utils/validationConfig.js";
import Input from "../Input/Input.jsx";

function Login() {
  const { userState, setUserState } = useContext(CurrentUserContext);
  const { moviesState, setMoviesState } = useContext(MovieContext);
  const store = useContext(Validation);
  const { validationState, setValidationState } = store;
  const [requestMessage, setRequestMessage] = useState("");

  const history = useHistory();

  const [disabledInput, setDisabledInput] = useState(false);

  const [form, setForm] = useState({ email: "", password: "" });

  const includesInputError = useMemo(
    () =>
      Object.values(validationState.login.errors).some(
        (errorMessage) => errorMessage
      ),
    [validationState.login.errors]
  );

  function handleChange(e) {
    setRequestMessage("");
    const { newState } = checkValidation(e, "login");
    setValidationState(newState(validationState));
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function getUser() {
    const moviesStorage = JSON.parse(localStorage.getItem("movies"));
    mainApi
      .getUserInfo()
      .then(({ _id, name, email }) => {
        setUserState({ ...userState, _id, name, email, loggedIn: true });
        if (moviesStorage) {
          setMoviesState(moviesStorage);
        }
      })
      .catch((err) => {
        setUserState({ ...userState, loggedIn: false });
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabledInput(true);
    mainApi
      .login(form)
      .then((user) => {
        if (user.token) {
          getUser();
        }
      })
      .catch(({ status, message }) => {
        console.log(message);
        setRequestMessage(errorMessages[status]);
      })
      .finally(() => {
        setDisabledInput(false);
      });
  }

  useEffect(() => {
    mainApi.getUserInfo().then((user) => {});

    if (userState.loggedIn) {
      history.push("/movies");
    }
  }, [userState.loggedIn]);

  const disabledButton =
    includesInputError ||
    disabledInput ||
    Object.values(form).some((input) => input === "");

  return (
    <section className="login">
      <Link className="login__homepage" to="/">
        <img
          className="header__logo header__logo_register"
          src={logoHeader}
          alt="логотип"
        ></img>
      </Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          title="E-mail"
          onChange={handleChange}
          error={validationState.login.errors.email}
          disabled={disabledInput}
          required
        />
        <Input
          name="password"
          type="password"
          title="Пароль"
          onChange={handleChange}
          error={validationState.login.errors.password}
          disabled={disabledInput}
          required
        />
        <p
          className={`login__error-message ${
            requestMessage && "login__error-message_active"
          }`}
        >
          {requestMessage}
        </p>
        <button
          className={`login__button login__button_login ${
            disabledButton && "login__button_disabled"
          }`}
          type="submit"
          disabled={disabledButton}
        >
          Войти
        </button>
      </form>
      <div className="login__redirect">
        <p className="login__redirect-text">Еще не зарегистрированы?</p>
        <Link to="/signup" className="login__redirect-link">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
