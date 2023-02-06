import React from "react";
import Logo from '../../images/smiley.png'
import styles from '../footer/Footer.module.css'
import {Link} from "react-router-dom";

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div>
                <Link to="/">
                    <img className={styles.footer_img} src={Logo} alt="smiley :)"/>
                </Link>
            </div>
            <p><Link to="/">Return to clients list</Link></p>
            <span>Made with ❤ TYPESCRIPT and <b>ReactJS</b>.</span>
        </footer>
    );
};