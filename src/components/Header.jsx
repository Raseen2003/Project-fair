import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = ({insideDashboard}) => {
  return (
    <Navbar style={{zIndex:1}} className="shadow border rounded postion-fixed">
        <Container>
          <Navbar.Brand>
            <Link to={'/'}><i className='fa-brands fa-docker'></i>Projects Fair</Link>
          </Navbar.Brand>
      {
         insideDashboard &&
        <button className="btn btn-link fw-bolder">Logout <i className='fa-solid fa-right-from-bracket ms-1'></i>  </button>
      }
      
        </Container>
      </Navbar>
    
  )
}

export default Header