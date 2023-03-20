require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const axios = require('axios');
const {Videogame,Genero} = require('../db');

        
//GET TODOS LOS JUEGOS
 
const ApiVG= async () => {
    let juegos=[]    
    
    let api=`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`
    for (let index = 1; index <= 5; index++){
    const {data:{results,next,description}}= await axios.get(api);
        api=next
        
        juegos = juegos.concat(results.map(juego => {
            return { 
                id:juego.id,
                name: juego.name, 
                background_image:juego.background_image,  
                genres: juego.genres.map(j=>j.name), 
                released: juego.released,
                rating: juego.rating,    
                platforms: juego.platforms.map(j=>j.platform.name),
                description:description
            } 
        }))}  
        return juegos
    }
    
              
                
            
                
const Db = async()=>{
    return await Videogame.findAll({
        include:{
            model:Genero, 
            attributes:["name"],
              through: {
                attributes: [],
              } 
            
        }
    })
}
                
const totalDeJuegos = async () =>{
const juegosApi =  await ApiVG()
    const jDb = await Db()   
 
    const juegosDb=jDb.map(j=>{
        return{
            id:j.dataValues.id,
            name:j.dataValues.name,
            rating:j.dataValues.rating,
            genres:j.dataValues.generos.map(j=>j.name),
            platforms:j.dataValues.platforms,
            description:j.dataValues.description,
            background_image:j.dataValues.background_image
        }
    })
    
    const juegos= juegosApi.concat(juegosDb)
    return juegos
} 
                 

          
//GET JUEGO POR QUERY


const buscarPorName = async (name)=>{
    const juegos= await totalDeJuegos();
    const juego=  juegos.filter(j=>j.name.toLowerCase().includes(name.toLowerCase()))
    return juego.slice(0,15)
}

module.exports={ApiVG,Db,totalDeJuegos,buscarPorName}