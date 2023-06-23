const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    img:{type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9c93uXMHa1QaeW9g4bvGhYtN92-dtsa_4KiTWomiooQ&s"},
    title:String,
    body:String,
    subject:String,
    userID:String
},{
    versionKey:false
})

const PostModel = mongoose.model("post",postSchema)

module.exports={
    PostModel
}