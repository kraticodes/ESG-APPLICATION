const User = require('../models/User');
const jwt = require('jsonwebtoken');


const createToken = (id) =>{
       
    return  jwt.sign({_id:id}, process.env.SECRET, {expiresIn: '3d'});

}

//login user
const loginUser = async (req,res) => {
      const {email, password} = req.body;
     try{
            const user = await User.login(email,password);
            const token = createToken(user._id);
          
            if(user instanceof Error) {
                res.status(400).json(user.message);
            }
            res.status(200).json({user,email,token});
            
     }catch(e)
     {
        res.status(400).send(e);
     }
      
}


//SignUp user
const signUpUser = async (req,res) => {
     const {name,email , password} = req.body;
    try{
          const user = await User.signup(name,email,password);
          
          if(user instanceof Error) {
            res.status(400).json(user.message);
          }
          
           const token = createToken(user._id);
           console.log(user);
          res.status(200).send({user,name,email,token});
    }catch(e)
    {
       res.status(400).send("Couldn't create an account",e);
    }
     
}


module.exports = {
    loginUser , signUpUser
}