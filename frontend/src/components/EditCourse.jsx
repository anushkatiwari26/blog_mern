import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCourse = () => {

    const [course,setCourse]=useState({ id:'',courseName:'',instructor:'',category:'',duration:'',level:'',
    thumbnail:''})
    const navigate = useNavigate()
    const{id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:4000/course/course/${id}`)
        .then((res)=>setCourse(res.data))
        .catch((err)=>console.log(err))
    },[])

    const handleEdit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:4000/course/${id}`,course)
        .then(()=>navigate(`/${id}`))
        .catch((err)=>console.log(err))
    }

  return (
    <>
    <div
        class="container"
    >
        <div
            class="row justify-content-center align-items-center g-2"
        >
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Edit Course</h4>
                        <form onSubmit={handleEdit}>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.id}
                                onChange={(e)=>setCourse({...course,id:e.target.value})}
                            />
                            <label for="formId1">Course ID</label>
                        </div>
                         <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.courseName}
                                onChange={(e)=>setCourse({...course,courseName:e.target.value})}
                            />
                            <label for="formId1">Course Name</label>
                        </div>
                         <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.instructor}
                                onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                            />
                            <label for="formId1">Course Instructor</label>
                        </div>
                         <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.category}
                                onChange={(e)=>setCourse({...course,category:e.target.value})}
                            />
                            <label for="formId1">Course Category</label>
                        </div>
                         <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.duration}
                                onChange={(e)=>setCourse({...course,duration:e.target.value})}
                            />
                            <label for="formId1">Duration</label>
                        </div>
                         <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.level}
                                onChange={(e)=>setCourse({...course,level:e.target.value})}
                            />
                            <label for="formId1">Level</label>
                        </div>
                         <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.thumbnail}
                                onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                            />
                            <label for="formId1">Thumbnail</label>
                        </div>
                        <button
                            type="submit"
                            class="btn btn-success"
                        >
                            Update
                        </button>
                        </form>
                        
                    </div>
                </div>
                
            </div>
            </div>
        
    </div>
    
    </>
  )
}

export default EditCourse
