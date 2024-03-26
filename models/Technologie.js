const mongoose=require('mongoose');

const SchemaTechnologie= new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    domaine:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    date:{
        type:Date,
        required:true,
    },

},{ timestamps : true });
const Technologie = mongoose.model('Technologie',SchemaTechnologie);

module.exports={
    Technologie
}







