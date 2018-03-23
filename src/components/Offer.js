import React from 'react';
import '../styles/Offer.css';

const Offer = () => {
    return(
        <section className="offer">
            <section className="offer__question">
                <span>Любите спорт и готовы превратить его в заработок, но не знаете с чего начать?</span>
                <span>Мы поможем вам начать и добиться реальных результатов?</span>
            </section>
            <section className="offer__pictures">
                <div className="offer__pictures-round green-border"><img src="./assets/offers/home_big.png" alt="home_big"/>
                </div>
                <div className="offer__pictures-line"><img src="./assets/offers/line.png" alt="girl"/></div>
                <div className="offer__pictures-round"><img src="./assets/offers/girl.png" alt="girl"/></div>
                <div className="offer__pictures-line"><img src="./assets/offers/line.png" alt="girl"/></div>
                <div className="offer__pictures-round"><img src="./assets/offers/study.png" alt="study"/></div>
                <div className="offer__pictures-line"><img src="./assets/offers/line.png" alt="girl"/></div>
                <div className="offer__pictures-round"><img src="./assets/offers/music.png" alt="music"/></div>
                <div className="offer__pictures-line"><img src="./assets/offers/line.png" alt="girl"/></div>
                <div className="offer__pictures-round"><img src="./assets/offers/transport.png" alt="transport"/></div>
            </section>
            <section className="offer__info">
                <h3>Основная информация</h3>
                <section className="articles"> 
                    <article className="articles-left">
                        <p >
                            Профессионалы своего дела помогут завести вам аккаунт на доверенной спорт площадке,
                            покажут как необходимо им пользоваться и помогут сделать первые ставки.
                        </p>
                    </article>
                    <article className="articles-right">
                        <p >В наших интересах то, что вы будет удовлетворены нашим сервисам, 
                            поэтому при необходимости будем давать вам советы, которые могут помочь выиграть.</p>
                    </article>
                </section>
            </section>
        </section> 
    );
}
 
export default Offer;