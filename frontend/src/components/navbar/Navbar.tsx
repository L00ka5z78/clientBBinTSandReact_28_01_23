import React from "react";
import {Link, NavLink, redirect, useNavigate} from "react-router-dom";
import Logo from '../../images/smiley.png';
import {inspect} from "util";
import styles from './Navbar.module.css'

//******************************adjust styling logo placement*****

export const Navbar = () => {

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     const path = '/register';
    //     navigate(path);
    // }

    // const showToast = () => {
    //     toast.success("Success message")
    // };
    //
    // const colorOfLink = ({isActive}: {
    //     isActive: boolean;
    // }) => ({color: isActive ? 'green' : 'red'})

    return (

        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/mamma">
                        <img src={Logo} alt="smiley :)"/>
                    </Link>
                </div>
                <h1>Clients database</h1>
                <Link to="/add">Switch to addClient </Link>
                <span>JOhhny</span>
                    <button className={styles.btn}>Log in</button>
                    {/*<button onClick={routeChange}>Log in</button>*/}
                </div>

            </div>
    );
};