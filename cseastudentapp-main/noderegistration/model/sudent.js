const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},
{
    timestamps:true
})
const student=mongoose.model("student",studentSchema);
module.exports=student;