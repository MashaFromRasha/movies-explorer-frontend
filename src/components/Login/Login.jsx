import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';

function Login() {
    return (
        <section className='login'>
            <Link className='login__homepage' to='/'>
                <img
                    className='header__logo header__logo_register'
                    src={logoHeader}
                    alt='логотип'>
                </img>
             </Link>
            <h1 className='login__title'>Рады видеть!</h1>
            <form className='login__form'>
                <p className="login__type">E-mail</p>
                <input
                    name='email'
                    id='email'
                    type='email'
                    className='login__input login__input_type_email'
                    required
                />
                <p className="login__type">Пароль</p>
                <input
                    name='password'
                    id='password'
                    type='password'
                    className='login__input login__input_type_password'
                    required
                    minLength='8'
                    maxLength='16'
                />
                <button type='submit' className='login__button'>
                    Войти
                </button>
            </form>
            <div className='login__redirect'>
                <p className='login__redirect-text'>Еще не зарегистрированы?</p>
                <Link to='/signup' className='login__redirect-link'>Регистрация</Link>
      </div>
        </section>
    )
}

export default Login;