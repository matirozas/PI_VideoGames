import React from 'react';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getGameId} from '../actions';
import { Link } from 'react-router-dom';
import s from '../style/GameDetail.module.css'
import se from '../style/Home.module.css'



export default function GameDetail({id}) {
    
     const dispatch=useDispatch();
     
    useEffect(()=>{
       dispatch(getGameId(id))
      },[dispatch,id]) 
      
      const game = useSelector((state) => state.gameDetail);
        if (!game.background_image){
          game.background_image='https://static.vecteezy.com/system/resources/previews/002/293/504/non_2x/video-games-neon-sign-vector.jpg';

        }
      return (
        
          
          <div className={s.detailF}>
            <nav className={se.nav}>
                
                <div className={se.divnav}>
                <Link to='/home'>
                    <button className={se.recargar}  >HOME</button>
                </Link>
                
                
                  

                <Link  className={se.navDiv} to='/create'>
                    <button className={se.recargar}>CREAR JUEGO</button>
                </Link>
                
            </div>
        </nav>
            <div className={s.dcard}>

              <h1 className={s.name}> {game.name}</h1>
              <img
              className={s.imgdetail}
              src={game.background_image}
              
              alt=''
              />
             <h5 className={s.texto}>Generos: {` ${game.genres}`}</h5>
              <p className={s.texto}>{game.description}</p>
                <h5 className={s.texto}>{game.released}</h5>
               <h5 className={s.texto}>rating: {game.rating}</h5>
              <h5 className={s.texto}>Plataformas: {` ${game.platforms}`}</h5>
             
              </div>
          </div>
        )
      }
              
    
    

