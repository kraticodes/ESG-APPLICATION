const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
     title:{
        type:String,
        trim: true,
        
     },
     body: {
        type:String,
        
     },
     author:{
        type:String,
     },
     imgUrl:{
        type:String,
        default:"https://www.intelex.com/wp-content/uploads/2022/05/CARS-600x400-1.png.webp"
     }

     
});

module.exports = mongoose.model('Blog', BlogSchema);