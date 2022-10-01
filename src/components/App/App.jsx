import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx'
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import { MovieContext } from "../../context/MovieContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { defaultMovieState } from "../../context/MovieContext.js";
import { defaultUserState } from "../../context/CurrentUserContext.js";
import mainApi from "../../utils/MainApi.js";
import {
  defaultValidationState,
  Validation,
} from "../../context/Validation.js";


function App() {
  const [moviesState, setMoviesState] = useState(defaultMovieState);
  const [userState, setUserState] = useState(defaultUserState);
  const [validationState, setValidationState] = useState(
    defaultValidationState
  );
  const [request, setRequest] = useState(true);

  useEffect(() => {
    setRequest(true);
    const movieStorage = JSON.parse(localStorage.getItem("movies"));
    if (movieStorage) {
      setMoviesState(movieStorage);
    }
    mainApi
      .getUserInfo()
      .then(({ _id, name, email }) => {
        setUserState({ ...userState, _id, name, email, loggedIn: true });
      })
      .catch((err) => {
        setUserState({ ...userState, loggedIn: false });
        console.log(err);
        localStorage.clear();
      })
      .finally(() => setRequest(false));
  }, []);

  return (
    !request && (
      <CurrentUserContext.Provider value={{ userState, setUserState }}>
        <MovieContext.Provider value={{ moviesState, setMoviesState }}>
          <Validation.Provider value={{ validationState, setValidationState }}>
            <div className="page">
              <Switch>
                <ProtectedRoute path="/movies" component={Movies} />
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/signin" component={Login}></Route>
                <Route
                  path="/signup"
                  component={Register}
                  buttonText="Зарегистрироваться"
                ></Route>
                <ProtectedRoute path="/saved-movies" component={SavedMovies} />
                <ProtectedRoute path="/profile" component={Profile} />
                <Route path="*" component={NotFound}></Route>
              </Switch>
            </div>
          </Validation.Provider>
        </MovieContext.Provider>
      </CurrentUserContext.Provider>
    )
  );
}

export default App;