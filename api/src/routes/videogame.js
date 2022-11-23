const { Router } = require('express');
const router = Router();
const {ApiId,DbId}=require('../controller/videogame')
    
     



    

    router.get('/:id', async ( req,res)=>{
        const {id} = req.params;
        try {
            if(!isNaN(id)){ 
                res.json(await ApiId(id))
            }else{
            res.json( await DbId(id))}

        } catch (error) { 
            res.status(404).send("No se encuentra el juego")
        }})

        module.exports=router