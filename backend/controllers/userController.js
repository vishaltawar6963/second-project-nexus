const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");


const registerUser = asyncHandler(
    async (req, res,) => {
        const {name , email, password , pic} = req.body;

        const userExist  = await User.findOne({email})
        
        if(userExist) {
            res.status(400)
            throw new Error
            ('user allready existssssss')
            
        }
     

const user = await User.create({name , email,password, pic})
       

        if (user) {
            res.status(201).json({
                _id :user._id , 
                name : user.name , 
                email : user.email,
                isAdmin: user.isAdmin ,    
                pic : user.pic,
                token :generateToken(user._id)
,
            })

        
            
        }else{
            res.status(400) 
            throw new Error("error occured")
            
        }
        
    }
) 

const authUser = asyncHandler(
    async (req, res,) => {
        const { email, password } = req.body;

        const user = await User.findOne({email});

        if(user && (await user.matchPassword(password))){
            res.json({
                _id :user._id , 
                name : user.name , 
                email : user.email,
                isAdmin: user.isAdmin ,    
                pic : user.pic,
                token :generateToken(user._id)
            })
        }else{
            res.status(400) 
            throw new Error("Invalid Email or Password!")
            
        }

      
        
    }
) 
module.exports = {registerUser, authUser}
