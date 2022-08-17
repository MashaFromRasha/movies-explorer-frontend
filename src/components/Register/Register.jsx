import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';

function Register() {
    return (
        <section className='register'>
            <Link className='register__homepage' to='/'>
                <img
                    className='header__logo header__logo_register'
                    src={logoHeader}
                    alt='логотип'>
                </img>
             </Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form'>
                <p className="register__type">Имя</p>
                <input
                    name='name'
                    id='name'
                    type='name'
                    className='register__input register__input_type_name'
                    required
                />
                <p className="register__type">E-mail</p>
                <input
                    name='email'
                    id='email'
                    type='email'
                    className='register__input register__input_type_email'
                    required
                />
                <p className="register__type">Пароль</p>
                <input
                    name='password'
                    id='password'
                    type='password'
                    className='register__input register__input_type_password'
                    required
                    minLength='8'
                    maxLength='16'
                />
                <button type='submit' className='register__button'>
                    Зарегистрироваться
                </button>
            </form>
            <div className='register__redirect'>
                <p className='register__redirect-text'>Уже зарегистрированы?</p>
                <Link to='/signin' className='register__redirect-link'>Войти</Link>
      </div>
        </section>
    )
}

export default Register;