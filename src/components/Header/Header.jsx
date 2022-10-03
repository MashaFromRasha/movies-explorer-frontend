import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation.jsx";
import { CurrentUserContext } from '../../contexts/user-context';

function Header() {
  const { userState } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logoHeader} alt="логотип" />
        </Link>
        <Navigation loggedIn={userState.loggedIn} />
      </div>
    </header>
  );
}

export default Header;
