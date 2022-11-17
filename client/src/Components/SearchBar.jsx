import React from 'react';
import { useState } from 'react';

import {useDispatch} from 'react-redux';
import {getGame} from '../actions';

 

const SearchBar = ()=>{

    const dispatch= useDispatch();
    const [name,setName] = useState('');
    
    const handleInput=(e)=>{
        e.preventDefault();
        setName(e.target.value)
        console.log(setName)
       
    }

    const submit=(e)=>{
        e.preventDefault();
        dispatch(getGame(name))
    }


    return(
        <div>
            <input 
            type="text"
             placeholder='Buscar...' 
             onChange={e=>handleInput(e)} />
           
            <button
             type='submit'
              onClick={e=>submit(e)}>BUSCAR</button>
        </div>
    
)

}

export default SearchBar;