import React from "react";
import { forwardRef } from "react";
import studentAvatar from '../../images/ава.jpg';

const AboutMe = forwardRef((props, ref) => {
    return (
        <section className="aboutme" id='about-me' ref={ref}>
            <h2 className="aboutme__title">Студентка</h2>
            <div className="aboutme__main">
                <div className="aboutme__info">
                <h3 className="aboutme__name">Маша</h3>
                <p className="aboutme__work">Frontend-developer, ux-ui designer, 29 лет</p>
                <p className="aboutme__description">Родилась в Калининграде. Закончила РУДН.
                Начала изучать фронтенд в 2021г.
                На протяжении 8 месяцев изучала веб-разработку, а также дизайн интерфейсов в Яндекс.Практикуме.
                Увлекаюсь кинематографом, графическим дизайном, люблю Балтийское море.
                </p>
                <ul className="aboutme__socials">
                    <li>
                        <a 
                        href="https://vk.com/murochkina"
                        className="aboutme__link"
                        target='_blank'
                        rel='noreferrer'>Vk</a>
                    </li>
                    <li>
                        <a 
                        href="https://github.com/MashaFromRasha"
                        className="aboutme__link"
                        target='_blank'
                        rel='noreferrer'>GitHub</a>
                    </li>
                </ul>
                </div>
                <div className="aboutme__img">
                <img className='aboutme__avatar' src={studentAvatar} alt='Аватар студента' />
                </div>
            </div>
        </section>
    );
});

export default AboutMe;