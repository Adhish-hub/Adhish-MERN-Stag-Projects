import React from 'react'
import { StudentContext } from './context/StudentContext'
import StudentList from './components/StudentList';
import TopperBadge from './components/TopperBadge';
import SkillList from './components/SkillList';

const App = () => {
  const students = [
    {
      id: 1,
      name: "Aman Sharma",
      age: 21,
      course: "BCA",
      skills: ["HTML", "CSS", "REACT"],
      isTopper: false,
    },

    {
      id: 2,
      name: "Adhish Tiwari",
      age: 23,
      course: "MCA",
      skills: ["TYPESCRIPT", "NODE.JS"],
      isTopper: true,
    },
  ]
  return (
    <StudentContext.Provider
    value = {{
      students,
      TopperBadge,
      SkillList
    }}
    >
      <div className='min-h-screen bg-gray-900 text-white p-10'>
        <h1 className='text-4xl font-bold text-center mb-10'>Student Profile Card</h1>
        <StudentList />
      </div>

    </StudentContext.Provider>
    
  );
};

export default App;