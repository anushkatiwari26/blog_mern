const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect('mongodb+srv://db_user1:db_user111@cluster0.pqqqe0i.mongodb.net/?appName=Cluster0')
    .then(()=>console.log("Connected to DB"))
    .catch((err)=>console.log(err))
}

module.exports=connectDB