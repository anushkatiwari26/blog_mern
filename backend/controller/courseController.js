const express = require('express')
const courseModel = require('../model/courseModel')

exports.addCourse = async (req,res) => {
    const new_course = new courseModel(req.body)
    const result = await new_course.save()
    res.status(200).json(result)
}

exports.showCourses = async(req,res)=>{
    const courses = await courseModel.find()
    if(courses!=null){
        res.status(200).json(courses)
    }else{
        res.status(404).json({message:'Courses not available'})
    }
}

exports.showCourse = async(req,res)=>{
    const course = await courseModel.findById(req.params.id)
    if(course!=null){
        res.status(200).json(course)
    }else{
        res.status(404).json({message:'Course is not in record'})
    }
}

exports.updateCourse = async(req,res)=>{
    const course = await courseModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({message:'Blog Updated Succesfully'})
}

exports.delCourse =async(req,res)=>{
    const course = await courseModel.findByIdAndDelete(req.params.id)
    if(course!=null){
        res.status(200).json({message:'Course Deleted Succesfully'})
    }else{
        res.status(200).json({message:'Course not found'})
    }
}
