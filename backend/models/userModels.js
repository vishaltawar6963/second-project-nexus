const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const userSchema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type : String , 
        required : true,
        unique : true ,

    },
    password : {
        type: String , 
        required: true
    },
    isAdmin:{
        type : String,
        required: true ,
         default : false
    }, 
    pic : {
        type : String , 
        required : true ,
        default : "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg"
        }
},
{
    timestamps: true ,
})

userSchema.pre('save' , async function (next)  {
    
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt)
})

userSchema.methods.matchPassword = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

const User =  mongoose.model("User" , userSchema);

module.exports = User;