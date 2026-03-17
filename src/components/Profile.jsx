import React,{useState} from 'react'
import { Collapse } from 'react-bootstrap';
import uploadImg from '../assets/uploadImg.jpg'



const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="d-flex justify-content-evenly">
      <h3 className="text-info">Profile</h3>
      <button onClick={()=>setOpen(!open)} className="btn btn-info"><i className='fa-solid fa-chevron-down'></i></button>
    </div>
    <Collapse in={open}>
        <div className='row container-fluid align-items-center shadow p-2 rounded' id="example-collapse-text">
          {/* upload pic */}
          <label className='text-center'>
            <input style={{display:'none'}} type="file" />
            <img width={'200px'} height={'200px'} className='rounded-circle py-2' src={uploadImg} alt="" />
          </label>
          
          <div className='mb-2 w-100'>
            <input type="text"  placeholder='User GitHub Link' className='form-control'/>
          </div>
          <div className='mb-2 w-100'>
            <input type="text"  placeholder='User LinkedIn Link' className='form-control'/>
          </div>
          <div className="d-grid w-100">
            <button className="btn btn-info">Update</button>
          </div>
        </div>
      </Collapse>
      
    </>
  )
}

export default Profile