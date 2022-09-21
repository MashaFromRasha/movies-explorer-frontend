import React from "react";
import { forwardRef } from "react";

const AboutProject = forwardRef((props, ref) => {
    return (
        <section className="about" id="about-project" ref={ref}>
            <div className="about__info">
                <h2 className="about__title">О проекте</h2>
            <div className="about__description">
                <div className="about__description-item">
                    <h2 className="about__description-title">Дипломный проект включал 5 этапов</h2>
                    <p className="about__description-exp">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about__description-item">
                    <h2 className="about__description-title">На выполнение диплома ушло 5 недель</h2>
                    <p className="about__description-exp">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
                    <div className="about__duration">
                        <p className="about__duration-title about__duration-title_green">1 неделя</p>
                        <p className="about__duration-title about__duration-title_white">4 недели</p>
                    </div>
                    <div className="about__duration">
                        <p className="about__duration_type_backend">Back-end</p>
                        <p className="about__duration_type_frontend">Front-end</p>
                    </div>
            </div>
        </section>
    );
});

export default AboutProject;
