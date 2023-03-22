
const initialState={
    games:[],
    gameDetail:{},
    gamestotal:[],
    gamesT:[]
  

}
function reducer(state=initialState,action){
    switch (action.type) {
        case 'GET_ALL_GAMES':
            return{
                ...state,
                games:action.payload,
                gamestotal:action.payload,
                gamesT:action.payload
            }

        case 'GET_GAME':
            return{
                
                ...state,
                games:action.payload,
               
            }
        case 'GET_GAME_ID':
            return {
                ...state,
                gameDetail:action.payload
            }
       
            case 'FILTRAR_JUEGO':
                   let juegosF=state.games;
                   let totalDeJuegosF= state.gamestotal;
                  
                   juegosF=totalDeJuegosF;
                   let filtroF=action.payload==='creado'? 
                   juegosF.filter(j=>isNaN(j.id)) :
                   juegosF.filter(j=>!isNaN(j.id));
                   
                   return{
                       ...state,
                       games: action.payload === 'todos'? totalDeJuegosF : filtroF,
                       gamesT: action.payload === 'todos'? totalDeJuegosF : filtroF
                   }
                    
       
        case 'FILTRAR_POR_GENERO':
            let juegos= state.games;
            let totalJuegos= state.gamesT;
          juegos= totalJuegos;
            let filtro= action.payload ==='Todos'? totalJuegos : 
            juegos.filter(j=>j.genres.includes(action.payload))
            return {
                ...state,
                games:filtro
            }
        case 'ORDENAR_ALFAB':
            let ordenJ = action.payload === 'a-z'? 
            
            state.games.sort(function (a,b){
                if (a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1;
                }
                
                if (a.name.toLowerCase()<b.name.toLowerCase()){
                    return -1;
                }
                return 0;
            }) :
            
            state.games.sort(function (a,b){
                if (a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1;
                }
                
                if (a.name.toLowerCase()<b.name.toLowerCase()){
                    return 1;
                }
                return 0;
            }) 
            
            return {
                ...state,
                games:ordenJ
            }
            
            
            case 'ORDENAR_RATING':
                let ordenR = action.payload === 'Rating mas bajo'? 
                
                state.games.sort(function (a,b){
                    if (a.rating>b.rating){
                        return 1;
                    }
                    
                    if (a.rating<b.rating){
                        return -1;
                    }
                    return 0;
                }) :
                
                state.games.sort(function (a,b){
                    if (a.rating>b.rating){
                        return -1;
                    }
                    
                    if (a.rating<b.rating){
                        return 1;
                    }
                    return 0;
                }) 
                return {
                    ...state,
                    games:ordenR
                }
            case 'POST_VIDEOJUEGO':
                    return {
                      ...state
                    }
                   
         
        
            default: return state;
           
        
        }}


export default reducer;


