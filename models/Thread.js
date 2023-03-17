const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
     title:{
        type:String,
        trim: true,
        
     },
     replies: {
        type:[],
       
     },
     likes:{
        type:[],
     },
     userId:{
       type:String,
       
     }
});

module.exports = mongoose.model('Thread', ThreadSchema);