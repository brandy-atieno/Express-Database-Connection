const express = require("express")
const bodyparser = require('body-parser');
const {router}=require('./routes/users')
const port=5000
const server=express()
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));


server.use('/', router)
server.use((req,res,next)=>{
    const error=new  Error ('NOT FOUND');
    error.status(404);
    next(error);
})
server.use((error,req,res,next) => {
            res.status( error.status || 500);
            res.json({ 
                error:
                {
                message:error.message}
            })
        });
            





server.listen(port,()=>{
    console.log(`Running at http://localhost:${port}`)
})