import { useEffect, useState } from "react"
import { getStudents, deleteStudent } from "../services/api"
import { Link } from "react-router-dom"

function StudentList() {

  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    try {
      const res = await getStudents()
      setStudents(res.data)
    } catch (error) {
      console.log("Error fetching students:", error)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id)
      fetchStudents()
    } catch (error) {
      console.log("Delete error:", error)
    }
  }

  return (
    <div>

      <h2>Student List</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.email}</td>

              <td>
                <Link to={`/edit/${s.id}`}>Edit</Link>

                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleDelete(s.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default StudentList