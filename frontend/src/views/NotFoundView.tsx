import React from "react";
import {Link} from "react-router-dom";
import MazeImg from '../images/lost.jpg'

import styles from './NotFound.module.css'

import '../index.css'

export const NotFoundView = () => (
    <>
        <h1>View not found.</h1>
        <div className={styles.not_found}>
            <img className={styles.img} src={MazeImg} alt="maze :)"/>
            <Link to="/">Go back to home page</Link>
        </div>
        <div>
        </div>
    </>
)