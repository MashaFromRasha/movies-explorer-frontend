import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";
import mainApi from "../../utils/MainApi.js";
import { checkValidation } from "../../utils/validationConfig.js";
import { errorMessages } from "../../utils/config.js";
import { defaultMovieState, MovieContext } from "../../contexts/movie-context.js";
import {
  CurrentUserContext,
  defaultUserState,
} from "../../contexts/user-context";
import { ValidationContext } from "../../contexts/validation-context";

function Profile() {
  const { setMoviesState } = useContext(MovieContext);
  const { userState, setUserState } = useContext(CurrentUserContext);
  const { validationState, setValidationState } = useContext(ValidationContext);
  const history = useHistory();
  const [errorRequest, setErrorRequest] = useState("");

  const [form, setForm] = useState({
    name: userState.name,
    email: userState.email,
  });

  useEffect(() => {
    mainApi.getUserInfo().then((user) => {
      setUserState({
        ...userState,
        name: user.name,
        email: user.email,
        _id: user._id,
      });
      setForm({ name: user.name, email: user.email });
    });
  }, []);

  const includesErrors = useMemo(
    () =>
      Object.values(validationState.profile.errors).some(
        (errorMessage) => errorMessage
      ),
    [validationState.profile.errors]
  );

  function handleChange(e) {
    setErrorRequest("");
    const { newState } = checkValidation(e, "profile");
    setErrorRequest("");
    setValidationState(newState(validationState));
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogout() {
    localStorage.clear();
    setMoviesState(defaultMovieState);
    setUserState({ ...defaultUserState, loggedIn: false });
    mainApi
      .logout()
      .then((msg) => {
        history.push("/");
      })
      .catch(console.log);
  }

  function handleSubmit(e) {
    e.preventDefault();
    mainApi
      .patchUserInfo(form)
      .then((user) => {
        setUserState({ ...userState, ...form });
      })
      .catch(({ status, message }) => {
        console.log(message);
        setErrorRequest(errorMessages[status]);
      });
  }

  useMemo(() => {
    setForm({ name: userState.name, email: userState.email });
  }, [userState.name, userState.email]);

  const isNewUserInfo =
    userState.name !== form.name || userState.email !== form.email;

  return (
    <section className="profile">
      <Header />
      <h1 className="profile__title">Привет, {userState.name}!</h1>
      <form className="profile__forms" onSubmit={handleSubmit}>
        <div className="profile__inputs">
          <label className="profile__input-name">Имя</label>
          <input
            className="profile__input"
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            minLength={2}
            required
          />
        </div>
        <div className="profile__inputs">
          <label className="profile__input-name">Email</label>
          <input
            className="profile__input"
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <p
          className={`register__error-message ${
            errorRequest && "register__error-message_active"
          }`}
        >
          {errorRequest}
        </p>
        <p
          className={`register__error-message ${
            includesErrors && "register__error-message_active"
          }`}
        >
          {includesErrors}
        </p>
        <button
          className="profile__submit-edit"
          type="submit"
          disabled={includesErrors || !isNewUserInfo}
        >
          Редактировать
        </button>
        <Link to="/signin">
          <button
            className="profile__submit-logout"
            type="submit"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </Link>
      </form>
    </section>
  );
}

export default Profile;
