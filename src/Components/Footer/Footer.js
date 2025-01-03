import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>© 2024 Website Tawjihikum - جميع الحقوق محفوظة</p>
                <ul className="social-media">
                    <li>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp"
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
