import React from "react";
import s from '../style/Paginado.module.css'


export default function Paginado ({setPagActual,pagActual,juegosPorPag,allGames,paginado}){
    const numeroDePagina =[]

    for (let i = 1; i <=Math.ceil(allGames/juegosPorPag); i++) {
        numeroDePagina.push(i)       
}
    const handlePrev=()=>{
        if(pagActual>1){setPagActual(pagActual-1)}
    }
    const handleNext=()=>{
        if(pagActual<numeroDePagina.length){setPagActual(pagActual+1)}
    }

    return(
       
                <ul className={s.ul}>
                    <button className={s.pag} onClick={handlePrev}>PREV</button>
                    
                    {numeroDePagina && numeroDePagina.map(n=>(
                        pagActual===n?
                        <button className={s.pagi} key={n} onClick={()=>paginado(n)}>

                            {n}
                        </button>:
                        <button className={s.pag} key={n} onClick={()=>paginado(n)}>

                            {n}
                        </button>
                    ))}
                   
                    <button className={s.pag} onClick={handleNext}>NEXT</button>
                </ul>
            
        )
        
    }
                    


                    