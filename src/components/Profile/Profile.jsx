import React from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header.jsx';

function Profile(loggedIn) {
    return (
        <section className="profile">
            <Header loggedIn={loggedIn}/>
            <h1 className="profile__title">Привет, Маша!</h1>
            <form className="profile__forms">
                <div className="profile__inputs">
                    <label className="profile__input-name">Имя</label>
                    <input className="profile__input" type="text" name="name" required />
                </div>
                <div className="profile__inputs">
                    <label className="profile__input-name">Email</label>
                    <input className="profile__input" type="text" name="email" required />
                </div>
                <button className="profile__submit-edit" type="submit">
                    Редактировать
                </button>
                <Link to="/signin">
                    <button className="profile__submit-logout" type="submit">
                        Выйти из аккаунта
                    </button>
                </Link>
            </form>
        </section>
    );
}

export default Profile;
