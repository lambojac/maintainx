const mongoose=require("mongoose")
const assetSchema=mongoose.Schema({

category:{
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
name:{
    type:String,
},
photo:{
    type:String,
},
location:{
    type:String
},
criticality:{
    type:String,
},
description:{
    type:String,
},
serialNumber:{
    type:String,
},
model:{
    type:String,
    required:true,
},
manufacturer:{
    type:String,
    required:true,
},
year:{
    type:Date,
    required:true,
},
teamInCharge:{
    type:String,
    required:true,
},
file:{
    type:String,
    required:true,
},
assetType:{
    type:String,
    required:true,
},
vendors:{
    type:String,
    required:true
},
parts:{
    type:String,
    required:true
}
})
module.exports=mongoose.model("assets",assetSchema)