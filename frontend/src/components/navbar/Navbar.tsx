import React from "react";
import {Link, NavLink, redirect, useNavigate} from "react-router-dom";

import Logo from '../../images/smiley.png'


import './Navbar.css'
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

        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img className="header_img" src={Logo} alt="smiley :)"/>
                    </Link>
                </div>
                <h1>SANTA APP</h1>
                    <span>JOhhny</span>
                    {/*<button onClick={routeChange}>Log in</button>*/}
                </div>
            </div>
    );
};