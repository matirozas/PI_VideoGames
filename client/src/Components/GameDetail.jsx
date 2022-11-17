import React from 'react';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getGameId} from '../actions';
import { Link } from 'react-router-dom';




export default function GameDetail({id}) {
    
     const dispatch=useDispatch();
     
    useEffect(()=>{
       dispatch(getGameId(id))
      },[dispatch]) 
      
      const game = useSelector((state) => state.gameDetail);
        
      return (
          <div>
              <Link to='/home'>
                <button>VOLVER</button>
                </Link>

              <h1> {game.name}</h1>
                <h6>{game.released}</h6>
              <img
              src={game.background_image}
              width='25%'
              alt="Imagen inexistente"
              />
              <p>{game.description}</p>
             <h5>Generos: {game.genres}</h5>
              <h5>Plataformas: {game.platforms}</h5>
               <h5>rating: {game.rating}</h5>
             
          </div>
        );
      }
              
    
    

