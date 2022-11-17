import React from "react";

export default function Paginado ({juegosPorPag,allGames,paginado}){
    const numeroDePagina =[]

    for (let i = 1; i <=Math.ceil(allGames/juegosPorPag); i++) {
        numeroDePagina.push(i)       
}

    return(
        <nav>
                <ul>
                    {numeroDePagina && numeroDePagina.map(n=>(
                        <button key={n} onClick={()=>paginado(n)}>

                            {n}
                        </button>
                   
                    ))}
                </ul>
            </nav>
        )
        
    }
                    


                    