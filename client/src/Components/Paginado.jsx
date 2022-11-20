import React from "react";
import s from '../style/Home.module.css'


export default function Paginado ({juegosPorPag,allGames,paginado}){
    const numeroDePagina =[]

    for (let i = 1; i <=Math.ceil(allGames/juegosPorPag); i++) {
        numeroDePagina.push(i)       
}

    return(
       
                <ul className={s.ul}>
                    {numeroDePagina && numeroDePagina.map(n=>(
                        <button className={s.pag} key={n} onClick={()=>paginado(n)}>

                            {n}
                        </button>
                   
                    ))}
                </ul>
            
        )
        
    }
                    


                    