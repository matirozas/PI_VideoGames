import React from "react";
import s from '../style/GameCard.module.css'

export default function GameCard({ name, background_image, genres}) {
  if(!background_image){
    background_image='https://static.vecteezy.com/system/resources/previews/002/293/504/non_2x/video-games-neon-sign-vector.jpg';
  }
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
        