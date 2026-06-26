const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    id:Number,
    courseName:String,
    instructor:String,
    category:String,
    duration:Number,
    level:String,
    thumbnail:String
})

const courseModel = mongoose.model('course', courseSchema)

module.exports= courseModel 