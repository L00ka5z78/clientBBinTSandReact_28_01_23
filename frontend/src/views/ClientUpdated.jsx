import React, {useState} from "react";
import {Link} from "react-router-dom";
import WeaponImg from '../images/weapons.jpg'
import styles from './NotFound.module.css'

export const ClientUpdated = () => {

    return (
        <div>
            <h1>Client  has been updated.</h1>
            <div className={styles.not_found}>
                <img className={styles.img} src={WeaponImg} alt="client deleted"/>
                <Link to="/">Go back to home page</Link>
            </div>
            <div>
            </div>
        </div>
    )
}