const mongoose=require("mongoose")
const categorySchema=mongoose.Schema({
name:{
      type:String
},

description:{
type:String,
maxlength:[255,"your description must not exceed 255 characters"],
default:""
},

})
module.exports=mongoose.Schema("Category",categorySchema)