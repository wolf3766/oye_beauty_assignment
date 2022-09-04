const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const movie= new Schema({
    ID:{
        type: Number,
        unique: true,
        required: true,
    },name:{
        type:String,
        required:true
    }
});

const Movies=mongoose.model('Movies',movie);
module.exports=Movies;