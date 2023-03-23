import React from 'react';
import { useState } from 'react';

import {useDispatch} from 'react-redux';
import {getGame} from '../actions';
import s from '../style/SearchBar.module.css'
 

const SearchBar = ()=>{

    const dispatch= useDispatch();
    const [name,setName] = useState('');
    
    const handleInput=(e)=>{
        e.preventDefault();
        
        setName(e.target.value)
        
    }

    const submit=(e)=>{
        e.preventDefault();
        if(!name)alert('Enter Game')
        dispatch(getGame(name))
    }


    return(
        <div className={s.buscador}>
            <input 
            className={s.searchBar}
            type="text"
             placeholder='Buscar...' 
             onChange={e=>handleInput(e)} />
           
            <button className={s.searchBarB}
             type='submit'
              onClick={e=>submit(e)}></button>
        </div>
    
)

}

export default SearchBar;