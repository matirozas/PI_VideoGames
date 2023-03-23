import React from "react";
import { Link } from "react-router-dom";
import s from '../style/LandingPage.module.css'


export default function LandingPage(){
    return (
        <div className={s.landing}>
            <h1 className={s.landingH1}>HENRY VIDEOGAMES
            </h1>
                <Link to ='/home'>
                    <button className={s.buttonL} >GET INTO</button>
                </Link>
        </div>
    )
}
;