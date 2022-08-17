import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__info">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            </div>
            <div className="footer__main">
                <div>
                    <p className="footer__year">&copy; 2022</p>
                </div>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a
                        href="https://practicum.yandex.ru/"
                        className="footer__link"
                        target='_blank'
                        rel='noreferrer'>
                        Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__item">
                        <a
                        href="https://github.com/"
                        className="footer__link"
                        target='_blank'
                        rel='noreferrer'>
                        GitHub
                        </a>
                    </li>
                    <li className="footer__item">
                        <a
                        href="https://vk.com/"
                        className="footer__link"
                        target='_blank'
                        rel='noreferrer'>
                        VK
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;

