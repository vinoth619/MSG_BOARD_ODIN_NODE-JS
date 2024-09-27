

const mongoose=require('mongoose')
 const dotenv =require('dotenv')
 const cors=require('cors')

  dotenv.config()

let database;
   async function getDatabase(){
    
  await mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("DATA BASE CONNECTED")
    })
    .catch((err)=>{
     console.log(err)
    })

   }


   module.exports={getDatabase}