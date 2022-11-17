import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllGames,filtrarPorGenero,filtrarJuego,ordenarAlfab, ordenarRating} from '../actions';
import {Link} from 'react-router-dom'
import GameCard from './GameCard';
import Paginado from './Paginado';
import SearchBar from './SearchBar';


export default function Home(){
   const dispatch=useDispatch()
  
   useEffect(()=>{
       dispatch(getAllGames(),)
   },[dispatch])
   
   const allGames=useSelector((state)=>state.games)
   
    const [pagActual,setPagActual]= useState(1)
    const [juegosPorPag]= useState(15)
    const indiceUltimoJuego= pagActual * juegosPorPag
    const indicePrimerJuego = indiceUltimoJuego - juegosPorPag
    const juagosActuales = allGames.slice(indicePrimerJuego,indiceUltimoJuego)
    const [orden,setOrden] = useState('')

 
    const paginado=(numeroDePag)=>{
        setPagActual(numeroDePag)
    }
    
    const filtroPorGenero = (e) => {
        dispatch(filtrarPorGenero(e.target.value))
    }
    
    const filtroJuego = (e) => {
        dispatch( filtrarJuego(e.target.value))
    }
    
    const ordenAlfab = (e) => {
        dispatch( ordenarAlfab(e.target.value))
        setOrden(e.target.value)
        setPagActual(1)
    }
    
    const ordenRating = (e) => {
        dispatch( ordenarRating(e.target.value))
        setOrden(e.target.value)
        setPagActual(1)
    }
    const quitarFiltros = (e)=>{
        dispatch(getAllGames())
    }
     
    
    return (
        <>
        <nav>
            
        </nav>
            <SearchBar/>
            <Link to='/create'>
                <button>Crear juego</button>
                </Link>
            
            <button onClick={e=> quitarFiltros(e)} >QUITAR FILTROS</button>
            
 
            
           

            <div>GENEROS
                <select onChange={e => filtroPorGenero(e)}>
                <option value='Todos'>Todos</option>
                  <option value='Action'>Action</option>
                  <option value='Indie'>Indie</option>
                  <option value='Casual'>Casual</option>
                  <option value='Adventure'>Adventure</option>
                  <option value='RPG'>RPG</option>
                  <option value='Strategy'>Strategy</option>
                  <option value='Simulation'>Simulation</option>
                  <option value='Shooter'>Shooter</option>
                  <option value='Puzzle'>Puzzle</option>
                  <option value='Arcade'>Arcade</option>
                  <option value='Plataformer'>Platformer</option>
                  <option value='Racing'>Racing</option>
                  <option value='Massively Multiplayer'>
                    Massively Multiplayer
                  </option>
                  <option value='Sports'>Sports</option>
                  <option value='Fighting'>Fighting</option>
                  <option value='Family'>Family</option>
                  <option value='Board Games'>Board Games</option>
                  <option value='Educational'>Educational</option>
                  <option value='Card'>Card</option>
                </select>
            </div>
        
            <div>TIPO DE JUEGO
                <select onChange={e=>filtroJuego(e)}>
                    <option value='todos' >Todos</option>
                    <option value='api' >Api</option>
                    <option value='creado' >Creado</option>
                </select>
            </div> 
                 
            <div>ORDENAR
                <select onChange={e=>ordenAlfab(e)} >
                    
                    <option value='Todos'>Todos</option>
                    <option value='a-z'>A-Z</option>
                    <option value='z-a'>Z-A</option>
                </select>
            </div>

            <div>RATING
                <select onChange={e=>ordenRating(e)} >
                    <option value='Todos'>Todos</option>
                    <option value='Rating mas alto'>Rating mas Alto</option>
                    <option value='Rating mas bajo'>Rating mas Bajo</option>
                </select>
            </div>
                    
            
            <Paginado
            juegosPorPag={juegosPorPag}
            allGames={allGames.length}
            paginado={paginado}/>

           
           
           {/* +++++++++++++GET ALL GAMESCARD+++++++++++ */}


            <div>
                {juagosActuales&&juagosActuales.map(j=>{
                    return (
                        <div>
                            <Link to={`/gamedetail/${j.id}`}>

                            <GameCard 
                                key={j.id}
                                background_image={j.background_image}
                                name={j.name}
                                genres={j.genres}

                                
                                />
                                </Link>
                        </div> 
                    )
                })}
            </div>
        
        </>
        
    )
}
                       
        
              
        
                                
                            
