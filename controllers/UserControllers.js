

const data =require('../users.json')


    
function home (req,res){
   res.send("Welcome")
   
}  

  function getUsers (req,res){


    const users={
        status:200,
        success:true,
        message:"Here are the users",
        data:data
    }
    res.send(users)
    const fail={
        status:200,
        success:true,
        message:"Here are the users",
        data:[]
    }
    res.send()
  
    }
    function getUser (req, res){
        const {email} = req.params
        const user = data.find(user=>user.email===email)
        if(user){
        return res.status(200).json({
            status:200,
            success: true,
            message: "success",
            results:user})}
    
            res.status(404).json({
                status:404,
                success: false,
                message: "not found",
                results:{}})
    }

    
      function login (req, res){
        const {email, Password} = req.body
        const user = data.find(user=>user.email===email)
        if(user && user.Password=== Password){
             res.json({
                status:200,
                success: true,
                message: "Logged in successfully",
                results:user})}
            
            res.status(403).json({
                status:404,
                success: false,
                message: "Wrong credentials",
                results:{}})

        
    }

    

    


module.exports = {home,getUsers,getUser,login}

