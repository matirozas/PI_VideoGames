import React from "react";
import { Link } from "react-router-dom";

import s from "../style/GameCard.module.css";

export default function GameCard({ name, background_image, genres, id }) {
  if (!background_image) {
    background_image =
      "https://static.vecteezy.com/system/resources/previews/002/293/504/non_2x/video-games-neon-sign-vector.jpg";
  }
  
  
    return (
      <div className={s.detalle}>
        <div className={s.div}>
          <img className={s.img} src={background_image} alt="" />
          <div>
            <h3 className={s.h3}>{name}</h3>
            <h5 className={s.h5}>{genres}</h5>
            {typeof id === 'string' && 
            <Link to={`/updateGame/${id}`}>
              <button className={s.editar}>EDITAR</button>
            </Link>}
          </div>
        </div>
      </div>
    );
  }
            
 

