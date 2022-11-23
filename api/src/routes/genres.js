const { Router } = require('express');
const router = Router();
const {getGenerosDb}=require('../controller/genres')
            
    
    
    router.get('/', async ( req,res)=>{
        try {
            const getGen = await getGenerosDb()
            res.json( await getGen)
        } catch (error) {
           console.log(error)
            
        }
    
    
    })
        
    module.exports=router