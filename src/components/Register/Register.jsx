import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/user-context";
import { ValidationContext } from "../../contexts/validation-context";
import logoHeader from "../../images/logo.svg";
import mainApi from "../../utils/MainApi.js";
import { checkValidation } from "../../utils/validationConfig.js";
import { errorMessages } from "../../utils/config.js";
import Input from "../Input/Input.jsx";
import InfoToolTip from "../InfoTooltip/InfoTooltip";
import { InfoToolTipContext } from "../../contexts/infotooltip-context";

function Register() {
  const { userState, setUserState } = useContext(CurrentUserContext);
  const store = useContext(ValidationContext);
  const { validationState, setValidationState } = store;
  const { toolTipState, setToolTipState } = useContext(InfoToolTipContext);
  const history = useHistory();

  const [requestMessage, setRequestMessage] = useState("");

  const [disabledInput, setDisabledInput] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const includesInputError = useMemo(
    () =>
      Object.values(validationState.register.errors).some(
        (errorMessage) => errorMessage
      ),
    [validationState.register.errors]
  );

  function handleChange(e) {
    setRequestMessage("");
    const { newState } = checkValidation(e, "register");
    setValidationState(newState(validationState));
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function getUser() {
    mainApi
      .getUserInfo()
      .then(({ _id, name, email }) => {
        setUserState({ ...userState, _id, name, email, loggedIn: true });
      })
      .catch((err) => {
        setUserState({ ...userState, loggedIn: false });
      });
  }
  function autoLogin({ email, password }) {
    mainApi
      .login({ email, password })
      .then((user) => {
        if (user.token) {
          getUser();
        }
      })
      .catch(({ status, message }) => {
        console.log(message);
        setRequestMessage(errorMessages[status]);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setDisabledInput(true);
    mainApi
      .registration(form)
      .then((user) => {
        if (user) {
          autoLogin(form);
        }
        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: "Вы успешно зарегистрировались",
          success: true,
        });
        // history.push('/signin');
      })
      .catch(({ status, message }) => {
        setRequestMessage(errorMessages[status]);
        setDisabledInput(false);
        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: "При регистрации произошла ошибка",
          success: false,
        });
      });
  }

  useEffect(() => {
    if (userState.loggedIn) history.push("/movies");
  }, [history, userState.loggedIn]);

  const disableButton =
    includesInputError ||
    disabledInput ||
    Object.values(form).some((input) => input === "");

  return (
    <section className="register">
      <Link className="register__homepage" to="/">
        <img
          className="header__logo header__logo_register"
          src={logoHeader}
          alt="логотип"
        ></img>
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          title="Имя"
          onChange={handleChange}
          error={validationState.register.errors.name}
          disabled={disabledInput}
          required
        />
        <Input
          name="email"
          type="email"
          title="E-mail"
          onChange={handleChange}
          error={validationState.register.errors.email}
          disabled={disabledInput}
          required
        />
        <Input
          name="password"
          type="password"
          title="Пароль"
          onChange={handleChange}
          error={validationState.register.errors.password}
          disabled={disabledInput}
          required
        />
        <button
          type="submit"
          className={`register__button ${
            disableButton && "register__button_disabled"
          }`}
          disabled={disableButton}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="register__redirect">
        <p className="register__redirect-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__redirect-link">
          Войти
        </Link>
      </div>
      <InfoToolTip />
    </section>
  );
}

export default Register;
