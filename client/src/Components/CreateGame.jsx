import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



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
    
    if (!input.rating) {
      error.rating = "Ingrese Rating";
    } else if (!/^([1-5](\.[0-9]{1,2})?)$/.test(input.rating)) {
        error.rating ='reating incorrecto'}
    
        if (input.genres.length < 1) {
      error.genres = "Seleccione un Genero";
    }
    if (input.platforms.length < 1) {
      error.platforms = "Seleccione una Plataforma";
    }  
    return error;
  }

const CreateGame =()=>{

    const initialState={
        name:'',
        description:'',
        released:'',
        rating:'ingrese numero',
        genres:[],
        platforms:[]

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
        
        if(e.target.name==='genres'){
            setInput({
                ...input,
                genres:[...input.genres,` ${e.target.value}`]
        })}
        
        if(e.target.name==='platforms'){
            setInput({
                ...input,
                platforms:[...input.platforms,` ${e.target.value}`]
        })}
      }
      
      let handleOnSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/videogames', input)
        alert('juego creado')
        setInput({
          name:'',
          description:'',
          released:'',
          rating:"3",
          genres:[],
          platforms:[]
        })
      }




        
        
            


    
    
    return(
        <>
        <Link to ='/home'>
                    <button>VOLVER</button>
                </Link>
        <h2>crearJuego</h2>
        <form onSubmit={handleOnSubmit}>
           <div>
                <label>Nombre</label>
                <input 
                type='text'
                value={input.name}
                name='name'
                onChange={handleOnChange}
                />
           </div>
           <p>{error.name}</p>
           
           <div>
                <label>Descripción</label>
                <input 
                type='text'
                value={input.description}
                name='description'
                onChange={handleOnChange}
                />
           </div>
           <p>{error.description}</p>
           
           <div>
                <label>Fecha de Lanzamiento</label>
                <input 
                type='text'
                value={input.released}
                name='released'
                onChange={handleOnChange}
                />
           </div>
           <p>{error.released}</p>
           
           <div>
                <label>Rating</label>
                <input 
                type='number'
                step='0.1'
               
                value={input.rating}
                name='rating'
                onChange={handleOnChange}
                />
           </div>
           <p>{error.rating}</p>
               
       
           
            <label >Generos</label>
            <select name='genres'value={input.genres} onChange={handleOnChange}>genres
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
                <p>{input.genres}</p>
                
                  <label >Plataformas</label>
                    <select name='platforms'value={input.platforms} onChange={handleOnChange}>
                      <option>PC</option>
                      <option>Play Station 5</option>
                      <option>Play Station 4</option>
                      <option>Xbox One</option>
                      <option>Xbox Series S/X</option>
                      <option>Nintendo Switch</option>
                      <option>iOS</option>
                      <option>Android</option>
                      <option>Nintendo 3DS</option>
                      <option>Nintendo DS</option>
                      <option>Nintendo DSi</option>
                      <option>macOS</option>
                      <option>Linux</option>
                      <option>Xbox 360</option>
                      <option>Play Station 3</option>
                    </select>
                    <p>{input.platforms}</p>

       <button disabled={!input.name|| Object.keys(error).length>0} type='submit'>CREAR JUEGO</button>
        </form>
        </>
    )
}
export default CreateGame;