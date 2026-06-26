import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/course/')
        .then((res)=>setCourses(res.data))
        .catch((err)=>console.log(err))
    },[])

  return (
    <>
    <div
        class="container"
    >
        <div
            class="row justify-content-center align-items-center g-2"
        >
            <div class="col">
                {
                    courses.map((course)=>(
                        <div class="card">
                            <img class="card-img-top" src={course.thumbnail} alt="Title" />
                            <div class="card-body">
                                <h4 class="card-title">{course.courseName}</h4>
                                <p class="card-text">{course.instructor}</p>
                                <NavLink
                                    name=""
                                    id=""
                                    className="btn btn-warning"
                                    to={`${course._id}`}
                                    role="button"
                                    >More Info</NavLink>
                                
                            </div>
                        </div>
                        
                    ))
                }
            </div>
              </div>
        
    </div>
    
    </>
  )
}

export default Home
