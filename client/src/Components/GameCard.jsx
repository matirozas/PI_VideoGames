import React from "react";


export default function GameCard({ name, background_image, genres, id}) {
  return (
    <div>
        <h3> {name}</h3>
      <img
        src={background_image}
       
        alt="Imagen inexistente"
      />
      <h4>{genres.map(g=>`${g} `)}</h4>
     
    </div>
  );
}
        