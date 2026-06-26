import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ShowCourse = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [course, setCourse] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:4000/course/course/${id}`)
        .then((res)=>setCourse(res.data))
        .catch((err)=>console.log(err))
    })

    const handleDelete = ()=>{
        axios.delete(`http://localhost:4000/course/${id}`)
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
                    <img class="card-img-top" src={course.thumbnail} alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title"> ID:{course.id}</h4>
                        <p class="card-text">COURSENAME:{course.courseName}</p>
                        <p class="card-text">INSTRUCTOR:{course.instructor}</p>
                        <p class="card-text">CATEGORY:{course.category}</p>
                        <p class="card-text">DURATION:{course.duration}</p>
                        <p class="card-text">LEVEL:{course.level}</p>
                        <NavLink
                            name=""
                            id=""
                            className="btn btn-primary"
                            to="/"
                            role="button"
                            >Back To Home</NavLink>
                            <NavLink
                            name=""
                            id=""
                            className="btn btn-success"
                            to={`/edit/${course._id}`}
                            role="button"
                            >Edit</NavLink>
                            <button
                                type="submit"
                                class="btn btn-danger"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                            
                        

                    </div>
                </div>
                
            </div>
               </div>
        
    </div>
    

    </>
  )
}

export default ShowCourse
