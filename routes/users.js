const router = require("express").Router()
const { home , getUser, login,getUsers} = require("../controllers/UserControllers");

router.get('/', home)
router.get('/users', getUsers)
router.get('/user/:email', getUser)

router.post('/login', login)


module.exports={router};    
        
           
      
 