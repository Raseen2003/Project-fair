import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsAPI } from '../services/allAPI'


const Projects = () => {
  const [allProjects,setAllProjects] = useState([])
  console.log(allProjects);
  useEffect(()=>{
    getAllProjects()

  },[])
  const getAllProjects = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      try{
        const result = await allProjectsAPI(reqHeader)
        console.log(result);
        if(result.status==200){
          setAllProjects(result.data)
        }
        
      }catch(err){
console.log(err);

      }
    }
  }
  
  return (
    <>
      <Header/>
      <div className='container-fluid'>
        <div className="d-flex justify-content-between align-items-center my-5">
          <h1>All Projects</h1>
          <input type="text" placeholder='Search projects by thier Language' className='form-control w-25'/>
        </div>
        <Row>
         <Col className='mb-3' sm={12} md={6} lg={4}>
         <ProjectCard/>
         </Col>
        </Row>
      </div>
    </>
  )
}

export default Projects
