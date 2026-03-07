import { useState } from "react"
import { addStudent } from "../services/api"
import { useNavigate } from "react-router-dom"

function StudentForm(){

const navigate = useNavigate()

const [student,setStudent] = useState({
 name:"",
 course:"",
 email:""
})

const handleChange = (e)=>{
 setStudent({...student,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
 e.preventDefault()

 await addStudent(student)

 navigate("/")
}

return(

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
value={student.name}
onChange={handleChange}
/>

<br/><br/>

<input
type="text"
name="course"
placeholder="Course"
value={student.course}
onChange={handleChange}
/>

<br/><br/>

<input
type="email"
name="email"
placeholder="Email"
value={student.email}
onChange={handleChange}
/>

<br/><br/>

<button>Add Student</button>

</form>

)

}

export default StudentForm