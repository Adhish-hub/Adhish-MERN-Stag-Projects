import React from 'react'
import StudentCard from "./StudentCard"

const StudentList = ({ students, BadgeComponent, SkillsComponent }) => {
  return (
    <div className='flex flex-wrap justify-center gap-6'>
        {students.map((student) => (
            <StudentCard
            key = {student.id}
            student = {student}
            BadgeComponent = {BadgeComponent}
            SkillsComponent = {SkillsComponent} 
            />
        ))};
        
    </div>
  );
};

export default StudentList;