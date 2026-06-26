const express = require ('express')
const cors = require('cors')
const connectDB = require('./db/dbConfig')
const routes = require('./routes/courseRoutes')

const app = express()
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/course', routes)
app.listen(4000,()=>{
    console.log("Server is Runninggg");
    
})