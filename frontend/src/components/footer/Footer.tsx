import React from "react";
import Logo from '../../images/smiley.png'
import styles from '../footer/Footer.module.css'
import {Link} from "react-router-dom";

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div >
                <Link to="/homesweethome">
                    <img className={styles.footer_img} src={Logo} alt="smiley :)"/>
                </Link>
            </div>
            <Link className={styles.link} to="/test">Switch to test</Link>

                       <span>Made with ❤ TYPESCRIPT and <b>ReactJS</b>.</span>
        </footer>
    );
};