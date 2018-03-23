import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <footer>
            <section className="footer">
                <section className="footer__nav">
                    <nav className="nav__col">
                        <a className="footer-links__first" href="">Lorem Lorem</a>
                        <a className="footer-links" href="">Lorem Lorem</a>
                        <a className="footer-links" href="">Lorem Lorem</a>

                    </nav>
                    <nav className="nav__col">
                        <a className="footer-links__first" href="">Lorem Lorem</a>
                        <a className="footer-links" href="">Lorem Lorem</a>
                        <a className="footer-links" href="">Lorem Lorem</a>
                    </nav>
                    <nav className="nav__col">
                        <a className="footer-links__first" href="">Follow us</a>
                        <nav>
                            <a className="" href=""><img src="./assets/facebook.png" alt="social_network"/></a>
                            <a className="footer-links" href=""><img src="./assets/twitter.png" alt="social_network"/></a>
                            <a className="footer-links" href=""><img src="./assets/google.png" alt="social_network"/></a>
                            <a className="footer-links" href=""><img src="./assets/youtube.png" alt="social_network"/></a>
                        </nav>
                    </nav>
                </section>
                <p className="copyright">Copyright © All Rights reserved</p>
        </section>
    </footer>
    );
}
 
export default Footer;