import React from 'react'

const SkillList = ({ skills }) => {
  return (
    <div className='mt-4'>
        <h4 className='font-semibold mt-2'>Skills : </h4>
        <ul className='list-disc list-inside text-gray-700'>
            {skills.map((skill, index) => (
                <li key = {index} > {skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default SkillList