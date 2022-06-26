const express=require('express')
const bodyparser = require('body-parser');
const port=5000
const server=express()
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));
const {router}=require('./routes/users')

server.use('/', router)
server.use('/users', router)
server.use('/user/:email', router)
server.use('/login', router)



server.listen(port,()=>{
    console.log(`Running at http://localhost:${port}`)
})