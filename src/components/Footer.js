import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <footer>
            <section className="footer">
                <section className="footer__nav">
                    <nav className="nav__col">
                        <a className="footer__link" href="">Lorem Lorem</a>
                        <a className="footer__link" href="">Lorem Lorem</a>
                        <a className="footer__link" href="">Lorem Lorem</a>

                    </nav>
                    <nav className="nav__col">
                        <a className="footer__link" href="">Lorem Lorem</a>
                        <a className="footer__link" href="">Lorem Lorem</a>
                        <a className="footer__link" href="">Lorem Lorem</a>
                    </nav>
                    <nav className="nav__col">
                        <a className="footer__link" href="">Follow us</a>
                        <nav>
                            <a className="" href=""><img src="./assets/facebook.png" alt="social_network"/></a>
                            <a className="footer__link" href=""><img src="./assets/twitter.png" alt="social_network"/></a>
                            <a className="footer__link" href=""><img src="./assets/google.png" alt="social_network"/></a>
                            <a className="footer__link" href=""><img src="./assets/youtube.png" alt="social_network"/></a>
                        </nav>
                    </nav>
                </section>
                <p className="copyright">Copyright © All Rights reserved</p>
        </section>
    </footer>
    );
}
 
export default Footer;