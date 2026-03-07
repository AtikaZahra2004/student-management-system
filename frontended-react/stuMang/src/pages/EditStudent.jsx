import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { updateStudent } from "../services/api"
import axios from "axios"

function EditStudent(){

const {id} = useParams()
const navigate = useNavigate()

const [student,setStudent] = useState({
 name:"",
 course:"",
 email:""
})

useEffect(()=>{
 fetchStudent()
},[])

const fetchStudent = async()=>{
 const res = await axios.get(`http://127.0.0.1:8000/api/students/${id}/`)
 setStudent(res.data)
}

const handleChange = (e)=>{
 setStudent({...student,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
 e.preventDefault()

 await updateStudent(id,student)

 navigate("/")
}

return(

<div>

<h2>Edit Student</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
value={student.name}
onChange={handleChange}
/>

<br/><br/>

<input
type="text"
name="course"
value={student.course}
onChange={handleChange}
/>

<br/><br/>

<input
type="email"
name="email"
value={student.email}
onChange={handleChange}
/>

<br/><br/>

<button>Update Student</button>

</form>

</div>

)
}

export default EditStudent