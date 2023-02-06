import React from "react";
import {Link, NavLink, NavLinkProps, redirect, useNavigate} from "react-router-dom";
import Logo from '../../images/smiley.png';
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
    const colorOfLink = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'green' : 'red'})

    return (

        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={Logo} alt="smiley :)"/>
                    </Link>
                </div>
                <h1>Clients database</h1>
                <NavLink style={colorOfLink} to="/add">Switch to addClient </NavLink>
                <NavLink style={colorOfLink} to="/client/id:">Switch to clientDetails_id </NavLink>
                <span>JOhhny</span>
                    <button className={styles.btn}>Log in</button>
                    {/*<button onClick={routeChange}>Log in</button>*/}
                </div>
            </div>
    );
};