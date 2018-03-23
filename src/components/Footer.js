import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <footer>
            <section class="footer">
                <section class="footer__nav">
                    <nav class="nav__col">
                        <a class="footer-links__first" href="">Lorem Lorem</a>
                        <a class="footer-links" href="">Lorem Lorem</a>
                        <a class="footer-links" href="">Lorem Lorem</a>

                    </nav>
                    <nav class="nav__col">
                        <a class="footer-links__first" href="">Lorem Lorem</a>
                        <a class="footer-links" href="">Lorem Lorem</a>
                        <a class="footer-links" href="">Lorem Lorem</a>
                    </nav>
                    <nav class="nav__col">
                        <a class="footer-links__first" href="">Follow us</a>
                        <nav>
                            <a class="" href=""><img src="./assets/facebook.png" alt="social_network"/></a>
                            <a class="footer-links" href=""><img src="./assets/twitter.png" alt="social_network"/></a>
                            <a class="footer-links" href=""><img src="./assets/google.png" alt="social_network"/></a>
                            <a class="footer-links" href=""><img src="./assets/youtube.png" alt="social_network"/></a>
                        </nav>
                    </nav>
                </section>
                <p class="copyright">Copyright © All Rights reserved</p>
        </section>
    </footer>
    );
}
 
export default Footer;