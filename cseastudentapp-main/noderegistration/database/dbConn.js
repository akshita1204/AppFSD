

const mongoose=require('mongoose')
function dbconn()
{
    try{
        mongoose.connect("mongodb://localhost:27017/studentappcsea");
        console.log("DB connected successfully");
    }
    catch(err)
    {
        console.log(err.message);
    }
}
module.exports=dbconn;