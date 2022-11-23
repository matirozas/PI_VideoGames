const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const axios = require('axios');

const {Videogame,Genero} = require('../db');
 
const router = Router();
 
// Configurar los routers 
// Ejemplo: router.use('/auth', authRouter);
 
  
   
   

 
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
            description:j.dataValues.description
        }
    })
    
    const juegos= juegosApi.concat(juegosDb)
    return juegos
} 
                 

          
        
    
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    
    //get/videogames?name='....'
    
  




const buscarPorName = async (name)=>{
    const juegos= await totalDeJuegos();
    const juego=  juegos.filter(j=>j.name.toLowerCase().includes(name.toLowerCase()))
    return juego.slice(0,15)
}
        
router.get('/videogames', async ( req,res)=>{
const {name}=req.query;
if (name) {
    const buscarName= await buscarPorName(name)
    buscarName.length ? res.json(buscarName) : res.status(404).send ('No existe ningun juego con este nombre')
}else{

    res.json( await totalDeJuegos())
}    
} )     

    
   
    




   


     











//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
//get /videogame/{idVideogame}:

const ApiId= async (id) => {
    const apiID= await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
    return {
        id:apiID.data.id,
        background_image  :apiID.data.background_image,
        
        name:apiID.data.name,
        genres: apiID.data.genres.map(g=>{return g.name}),
        description: apiID.data.description_raw, 
        released: apiID.data.released,
        rating: apiID.data.rating,    
        platforms: apiID.data.platforms.map(p=> {return  p.platform.name}),
    }
}    
     
const DbId = async(id)=>{ 
    const juegoID = await Videogame.findByPk(id,   
        {
            include:{
                model:Genero,
                attributes:["name"],
            }
        })
      
        const jID={
            
            id:juegoID.id,
            name:juegoID.name,
            genres:juegoID.generos.map(e=>e.dataValues.name),
            released:juegoID.released,
            rating:juegoID.rating,
            platforms:juegoID.platforms,
            description:juegoID.description
               
        }    
        return jID 
    }    
    
     



    

    router.get('/videogame/:id', async ( req,res)=>{
        const {id} = req.params;
        try {
            if(!isNaN(id)){ 
                res.json(await ApiId(id))
            }else{
            res.json( await DbId(id))}

        } catch (error) { 
            res.status(404).send("No se encuentra el juego")
        }})

 



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// GET /genres
/* Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
GET https://api.rawg.io/api/genres

 
*/

    

const getGeneros = async () => {
const {data:{results}} = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
return  results.map( g => g.name)
}

const getGenerosDb = async ()=>{
    const getGenerosDb = await getGeneros();
    getGenerosDb.forEach(g => { Genero.findOrCreate({where:{name:g}})
    });
    const genDB= await Genero.findAll();
    return genDB;
} 
        


router.get('/genres', async ( req,res)=>{
    try {
        const getGen = await getGenerosDb()
        res.json( await getGen)
    } catch (error) {
       console.log(error)
        
    }


})
    





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//post/videogames

router.post('/videogames', async (req,res)=>{
  
    let { name, description, released, rating, genres, platforms } = req.body;
    
    if(!name||!description||!released||!rating||!platforms){return res.send('faltan datos')} 
  
    try {
        let vgGenero = await Genero.findAll({
        where: { name: genres}});
      
        let [crearVG]= await Videogame.findOrCreate({
            where:{name:name},
            defaults:{
                name,
                description,
                released, 
                rating,
                platforms
            }
        });  
        crearVG.addGenero(vgGenero) 
       
        res.send(crearVG)  
    } catch (error) {
        console.log(error)
    }
         
             
         
     
    
    
}) 
     
        
        
  
  

    
    module.exports = router;