import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../images/smiley.png';
import styles from './Navbar.module.css';

export const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={Logo} alt="smiley :)"/>
                    </Link>
                </div>
                <h1>Clients database</h1>

                <span>JOhhny</span>
                    <button className={styles.btn}>Log in</button>
                    {/*<button onClick={routeChange}>Log in</button>*/}
                </div>
            </div>
    );
};