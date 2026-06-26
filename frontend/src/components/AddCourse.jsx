import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddCourse = () => {

    const [course, setCourse] = useState({ id:'',courseName:'',instructor:'',category:'',duration:'',level:'',
    thumbnail:''})
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/course/add', course)
        .then(()=>navigate('/'))
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
                        <h4 class="card-title">Add Course</h4>
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course, id: e.target.value})}
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
                                    onChange={(e)=>setCourse({...course, courseName: e.target.value})}
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
                                    onChange={(e)=>setCourse({...course, instructor: e.target.value})}
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
                                    onChange={(e)=>setCourse({...course, category: e.target.value})}
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
                                    onChange={(e)=>setCourse({...course, duration: e.target.value})}
                                />
                                <label for="formId1">Course Duration</label>
                            </div>
                             <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course, level: e.target.value})}
                                />
                                <label for="formId1">Course Level</label>
                            </div>
                             <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course, thumbnail: e.target.value})}
                                />
                                <label for="formId1">Thumbnail</label>
                            </div>
                            <button
                                type="submit"
                                class="btn btn-success"
                            >
                                Add Course
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

export default AddCourse
