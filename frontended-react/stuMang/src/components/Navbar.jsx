import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{padding:'30px',background:'black' , alignItems:'center',justifyContent:'center'}}>
        <Link to='/' style={{color:'white',marginRight:'20px'}} >Home</Link> 
        <Link to='/add' style={{color:'white'}}>Add student</Link>
    </div>
  )
}

export default Navbar