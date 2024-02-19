const mongoose=require('mongoose');
const searchSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('Search',searchSchema);