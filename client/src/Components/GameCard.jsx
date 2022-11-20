import React from "react";
import s from '../style/Home.module.css'

export default function GameCard({ name, background_image, genres, id}) {
  return (
    <div>

    <div className={s.div}>
      
       <img  
          className={s.img}
          src={background_image}
          alt=""
        />
        <h3 className={s.h3} >{name}</h3>
        <h5 className={s.h5}>{genres.map(g=>`${g} `)}</h5>
      </div>
     
    </div>
  );
}
        