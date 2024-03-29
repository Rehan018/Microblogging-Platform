const mongoose = require('mongoose');
const analyticsSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    action:{
        type:String,
        required:true,
    },
    timestamp:{
        type:Date,
        default: Date.now()
    },
});
module.exports=mongoose.model( 'Analytics',analyticsSchema);