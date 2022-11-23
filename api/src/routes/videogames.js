const { Router } = require('express');
const router = Router();
const {ApiVG,Db,totalDeJuegos,buscarPorName}=require('../controller/videogames')
const {Videogame,Genero} = require('../db');



//GET TODOS LOS JUEGOS O POR QUERY(ID)

router.get('/', async ( req,res)=>{
const {name}=req.query;
if (name) {
    const buscarName= await buscarPorName(name)
    buscarName.length ? res.json(buscarName) : res.status(404).send ('No existe ningun juego con este nombre')
}else{

    res.json( await totalDeJuegos())
}    
} )      



//POST JUEGO


router.post('/', async (req,res)=>{
  
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
module.exports=router