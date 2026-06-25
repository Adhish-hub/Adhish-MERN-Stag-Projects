import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

const StudentCard = ({ studentID }) => {
    const { students, TopperBadge, SkillList } = useContext(StudentContext);

    const student = students.find((item) => item.id === studentID);
  return (
    <div className='w-72 bg-white text-black rounded-2xl p-6 shadow-lg'>
        <h2 className='text-2xl font-bold mb-2'>{student.name}</h2>
        {student.isTopper && <TopperBadge />}

        <p className='mt-4 text-gray-700'>Age : {student.age}</p>
        <p className='text-gray-700'>Course : {student.course}</p>

        <SkillList skills = {student.skills}/>
    </div>
  )
}

export default StudentCard