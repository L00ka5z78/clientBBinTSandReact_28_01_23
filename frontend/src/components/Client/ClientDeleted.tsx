import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import PlanetImg from '../../images/planets.jpg'
import styles from './ClientTable.module.css'

import {GetSingleClientRes} from "types";

export const ClientDeleted = () => {

    return (
    <div>
        <h1>Client  has been deleted.</h1>
        <div className={styles.deleted}>
            <img className={styles.img} src={PlanetImg} alt="client deleted"/>
            <Link to="/">Go back to home page</Link>
        </div>
        <div>
        </div>
    </div>
)
}