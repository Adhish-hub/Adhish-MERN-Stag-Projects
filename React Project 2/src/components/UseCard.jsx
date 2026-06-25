import React from 'react'

const UseCard = ({ name, age, city, profession }) => {
  return (
    <div className='w-72 bg-white rounded-xl shadow-lg p-6 text-center'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='mt-3'>
            <span className='font-semibold'>Age : </span>{age}
        </p>
        <p>
            <span className='font-semibold'>City : </span>{city}
        </p>
        <p className='text-blue-600 font-medium mt-2'>{profession}</p>
    </div>
  )
}

export default UseCard