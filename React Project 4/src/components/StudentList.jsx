import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'
import StudentCard from "./StudentCard"

const StudentList = () => {
    const {students} = useContext(StudentContext);
  return (
    <div>
        {students.map((student) => (
            <StudentCard key = {student.id} studentID = {student.id}/>
        ))}
    </div>
  )
}

export default StudentList