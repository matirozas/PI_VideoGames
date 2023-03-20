import React from "react";
import {useDispatch} from 'react-redux';

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import s from '../style/CreateGame.module.css'
import {postVideojuego} from '../actions'



function validate(input) {
    let error = {};
    if (!input.name) {
      error.name = "Ingrese Nombre";
    }
    
     if (!input.description) {
      error.description = "Ingrese Descripcion";
    } else if (input.description.length<30){
        error.description='Debe ingresar 30 caracteres o mas para la descripcion'
    }
    if (!input.released||!/^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/.test(input.released)) {
      error.released = "Ingrese Fecha DD/MM/AAAA"
    }
    
    if (!/^([1-5](\.[0-9]{1,2})?)$/.test(input.rating)) {
        error.rating ='Ingrese un numero del 1 al 5.9'}
    
        
        if (input.genres.length < 1) {
      error.genres = 'Seleccione un Genero'
    }
    
    if (input.platforms.length<1) {
      error.platforms = 'Seleccione una Plataforma';

    }  
    return error;
  }

  const CreateGame =()=>{

    const history=useHistory()
    
    const dispatch=useDispatch()

    const initialState={
      name:'',
      description:'',
      released:'',
      rating:'',
      genres:[],
      platforms:[],
      background_image:''
    }
      


    let [input,setInput]= useState(initialState);
    let [error,setError]= useState({})

   

    
        
      
  
          

    let handleOnChange = (e)=>{
      e.preventDefault();
      
      setInput({
        ...input,
        [e.target.name]:e.target.value,
      })
      setError(validate({
        ...input,
        [e.target.name]:e.target.value
        
      }))

    
    if(e.target.name==='platforms'){
      if(!(input.platforms.includes(e.target.value))&& (e.target.value!==''))
        {
          setInput({
            ...input,
            platforms:[...input.platforms, e.target.value] 
          })
        }else if(input.platforms.includes(e.target.value)){
          setInput({
            ...input,
            platforms:[...input.platforms.filter(p=> p!==e.target.value)]
          })

        }else{
          
          setInput({
            ...input,
            platforms:[...input.platforms]
        })
      }}
        
    
 
    
      if(e.target.name==='genres'){
        if(!(input.genres.includes(e.target.value))&& (e.target.value!==''))
        {
          setInput({
            ...input,
            genres:[...input.genres, e.target.value] 
          })
        }else if(input.genres.includes(e.target.value)){
          setInput({
            ...input,
            genres:[...input.genres.filter(p=> p!==e.target.value)]
          })
    
        }else{
          setInput({
            ...input,
            genres:[...input.genres]
        })
      } }
    }
    
    
      
      
      
      
      let handleOnSubmit = (e)=>{
        e.preventDefault();
       console.log(input)
       dispatch(postVideojuego(input))
       console.log(input)
        
        alert('Juego creado correctamente')
        setInput({
          name:'',
          description:'',
          released:'',
          rating:'',
          genres:[],
          platforms:[],
          background_image:''
        })
        console.log(input)
        history.push('/home')
      }
        




        
        
            


    
    
    return(
        <div className={s.fondoCreate}>
        <Link  to ='/home'>
                    <button className={s.recargar}>HOME</button>
                </Link>
        <h2 className={s.h2}>CREA TU PROPIO JUEGO</h2>
        <form className={s.createForm} onSubmit={handleOnSubmit}>
                     
           <div>
                <label className={s.label}>NOMBRE </label><br />
                <input
                 className={s.input} 
                type='text'
                value={input.name}
                name='name'
                onChange={handleOnChange}
                />
           </div>
           <p className={s.error}>{error.name}</p>

           <div>
                <label className={s.label}> IMAGEN </label><br />
                <input
                 className={s.input} 
                type='text'
                value={input.background_image}
                name='background_image'
                onChange={handleOnChange}
                />
           </div>

           <div>
                <label  className={s.label}>DESCRIPCION </label><br />
                <input 
                className={s.input}
                type='text'
                value={input.description}
                name='description'
                onChange={handleOnChange}
                />
           </div>
           <p className={s.error}>{error.description}</p>
           
           <div>
                <label  className={s.label}>FECHA DE LANZAMIENTO </label> 
                <br />
                <input
                 className={s.input} 
                type='text'
                value={input.released}
                name='released'
                onChange={handleOnChange}
                />
           </div>
           <p className={s.error}>{error.released}</p>
           
           <div>
                <label  className={s.label}>RATING </label>
                <br />
                <input 
                 className={s.input}
                type='number'
                step='0.1'
               
                value={input.rating}
                name='rating'
                onChange={handleOnChange}
                />
           </div>
           <p className={s.error}>{error.rating}</p>
               
       
           
            <label  className={s.label}>GENEROS</label>
            <select  className={s.input} name='genres'value={input.genres} onChange={handleOnChange}>
                  <option ></option>
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
                    <p className={s.option}>{input.genres}</p>
                    <p className={s.error}>{error.genres}</p>
                    <p className={s.suprimirFiltros}>*Para borrar un Genero vuelva a seleccionarlo</p>
                
                
                        
                  
                  
                      
                
                  <label  className={s.label} >PLATAFORMAS</label>
                    <select  className={s.input} name='platforms'value={input.platforms} onChange={handleOnChange}>
                     <option></option>
                      <option value='PC'>PC</option>
                      <option value='Play Station 5'>Play Station 5</option>
                      <option value='Play Station 4'>Play Station 4</option>
                      <option value='Xbox One'>Xbox One</option>
                      <option value='Xbox Series S/X'>Xbox Series S/X</option>
                      <option value='Nintendo Switch'>Nintendo Switch</option>
                      <option value='iOS'>iOS</option>
                      <option value='Android'>Android</option>
                      <option value='Nintendo 3DS'>Nintendo 3DS</option>
                      <option value='Nintendo DS'>Nintendo DS</option>
                      <option value='Nintendo DSi'>Nintendo DSi</option>
                      <option value='macOS'>macOS</option>
                      <option value='Linux'>Linux</option>
                      <option value='Xbox 360'>Xbox 360</option>
                      <option value='Play Station 3'>Play Station 3</option>
                    </select>
                      <p className={s.option}>{input.platforms}</p>
                      <p className={s.error}>{error.platforms}</p>
                      <p className={s.suprimirFiltros}>*Para borrar una Plataforma vuelva a seleccionarlo</p>


       <button disabled={!input.name|| Object.keys(error).length>0} type='submit'  className={s.botonCrearJ}>CREAR JUEGO</button>
        </form>
        </div>
    )
}
export default CreateGame;