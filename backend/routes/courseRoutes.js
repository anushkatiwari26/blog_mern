const express = require ('express')
const { addCourse, showCourses, showCourse, updateCourse, delCourse } = require('../controller/courseController')

const routes = express.Router()

routes.post('/add',addCourse)
routes.get('/', showCourses)
routes.get('/course/:id', showCourse)
routes.put('/:id',updateCourse)
routes.delete('/:id', delCourse)

module.exports=routes