const { config } = require('dotenv');
const mssql = require('mssql')
const sqlConfig = require('../config/config');
const { user } = require('../config/config');
const poolPromise = require('../config/poolPromise')

const data =require('../users.json')


    
function home (req,res){
   res.send("Welcome")
   
}  
 const getUsers= async(req, res)=>{
    let pool = await poolPromise()
    pool.query(`select * FROM USERSS`).then(results=>{
        console.log(results.recordset)
        res.json({
            status:200,
            success: true,
            message: "success",
            results:results.recordset})
    }

    )}


    
   const getUser= async(req, res)=>{

        const {email} = req.params
        let pool = await poolPromise()
        pool.query(`select * FROM USERSS WHERE email='${email}'`).then(results=>{
            let user=results.recordset[0]
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

                    )


    
    

                
    }

    
    // 
     const login= async (req, res)=>{
        const {email, password} = req.body
        let pool = await poolPromise()
        pool.query(`select * FROM USERSS WHERE email='${email}'`).then(results=>{
            let user=results.recordset[0]
            if(user){
                let pass=user.password
                if(password===pass){
                        return res.json({
                            status:200,
                            success: true,
                            message: "Logged in successfully",
                            results:user})

                }
                else{
                    return  res.status(401).json({
                            status:401,
                            success: false,
                            message: "Wrong password",
                            results:{}})



                }

                
                
                
                }



        })


        
    }
    const create = async(req,res)=> {
        let {id, first_name, last_name, email, gender, Password} = req.body
        let pool = await poolPromise()
        pool.query(`insert into USERSS 
                    VALUES('${id}', '${first_name}', '${last_name}', '${email}', '${gender}', '${Password}')`)
                    .then(results=>{
                        if(results.rowsAffected){
                            res.send("user added")
                            console.log("user added")
                        }})

    }
    

    


module.exports = {home,getUsers,create,getUser,login}

