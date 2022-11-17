import axios from 'axios';

export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const GET_GAME_ID = 'GET_GAME_ID';
export const FILTRAR_POR_GENERO = 'FILTRAR_POR_GENERO'
export const FILTRAR_JUEGO = 'FILTRAR_JUEGO'
export const ORDENAR_ALFAB = 'ORDENAR_ALFAB'
export const ORDENAR_RATING = 'ORDENAR_RATING'
export const GET_GAME = 'GET_GAME'



export const getAllGames = () => async (dispatch) => {
    const json = await axios(`http://localhost:3001/videogames`);
    dispatch({
      type: GET_ALL_GAMES,
      payload: json.data,   
    });
  };
  
  export const getGame = (name) => async (dispatch) => {
      const json = await axios(`http://localhost:3001/videogames?name=${name}`);
      dispatch({
        type: GET_GAME,
        payload: json.data,   
      });
    };
  
  export const getGameId = (id) => async (dispatch) => {
    const json = await axios(`http://localhost:3001/videogame/${id}`);
    dispatch({
      type: GET_GAME_ID,
      payload: json.data,
    });
  }; 

  export const filtrarPorGenero = (payload) => {
    return{
      type:FILTRAR_POR_GENERO,
      payload
    }
  }

   export const filtrarJuego = (payload) => {
    return{
      type:FILTRAR_JUEGO,
      payload
    }
  }
  
   export const ordenarAlfab= (payload) => {
    return{
      type:ORDENAR_ALFAB,
      payload
    }
  }
   export const ordenarRating= (payload) => {
    return{
      type:ORDENAR_RATING,
      payload
    }
  }

 

  


 

