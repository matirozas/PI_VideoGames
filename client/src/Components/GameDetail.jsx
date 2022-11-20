import React from 'react';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getGameId} from '../actions';
import { Link } from 'react-router-dom';
import s from '../style/Home.module.css'



export default function GameDetail({id}) {
    
     const dispatch=useDispatch();
     
    useEffect(()=>{
       dispatch(getGameId(id))
      },[dispatch]) 
      
      const game = useSelector((state) => state.gameDetail);
        
      return (
          <div className={s.detailF}>
              <Link to='/home'>
                <button className={s.botonDetail}>VOLVER</button>
                </Link>
            <div className={s.dcard}>

              <h1 className={s.name}> {game.name}</h1>
              <img
              className={s.imgdetail}
              src={game.background_image}
              width='25%'
              alt=''
              />
             <h5 className={s.texto}>Generos: {` ${game.genres}`}</h5>
              <p className={s.texto}>{game.description}</p>
                <h5 className={s.texto}>{game.released}</h5>
               <h5 className={s.texto}>rating: {game.rating}</h5>
              <h5 className={s.texto}>Plataformas: {` ${game.platforms}`}</h5>
             
              </div>
          </div>
        );
      }
              
    
    

