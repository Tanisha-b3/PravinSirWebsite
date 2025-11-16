import React from 'react';
import './footer.css';
import { FaLinkedin, FaYoutube, FaInstagram, FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                {/* Headquarter */}
                <div className="footer-column">
                    <h4>Headquarter</h4>
                    <p>The CloudAdvisory Oy</p>
                    <p>Helsinki, 00100, Finland</p>
                </div>

                {/* Contact Info */}
                <div className="footer-column">
                    <h4>Contact Info</h4>
                    <p><a href="mailto:hello@pravinmishra.com">hello@pravinmishra.com</a></p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/pravin-mishra-aws-trainer/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ color: '#0077b5' }} />
                        </a>
                        <a href="https://www.youtube.com/@awswithpravinmishra" target="_blank" rel="noopener noreferrer">
                            <FaYoutube style={{ color: '#ff0000' }} />
                        </a>
                        <a href="https://www.instagram.com/awspravinmishra" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ color: '#e1306c' }} />
                        </a>
                        <a href="https://x.com/pravinmishra88" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter style={{ color: '#ccc' }} />
                        </a>
                    </div>

                </div>
                {/* Links */}
                <div className="footer-column">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#books">Books</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                {/* Outreach */}
                <div className="footer-column">
                    <h4>Outreach</h4>
                    <ul>
                        <li><a href="https://university.pravinmishra.in/learn" target="_blank" rel="noopener noreferrer">University</a></li>
                        <li><a href="https://pravinmishra.in/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    </ul>
                </div>
                {/* Legal */}
                <div className="footer-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                        <li><a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; {new Date().getFullYear()} Pravin Mishra - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;