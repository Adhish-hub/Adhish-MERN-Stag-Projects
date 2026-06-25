import React from 'react'
import UserCard from "./components/UseCard"

const App = () => {
  const users = [
    {
      id: 1,
      name: "Adhish Tiwari",
      age: 23,
      city: "Dewas",
      profession: "Frontend Developer",
    },

    {
      id: 2,
      name: "Naman Jain",
      age: 24,
      city: "Indore",
      profession: "UI Designer"
    },

    {
      id: 3,
      name: "Ram Gupta",
      age: 22,
      city: "Bhopal",
      profession: "Backend Developer"
    }
  ]
  return (
    <div className='min-h-screen bg-gray-200 flex justify-center items-center'>
      <div className='flex gap-6 flex-wrap justify-center'>

        {users.map((user) => (
          <UserCard 
          key = {user.id}
          name = {user.name}
          age = {user.age}
          city = {user.city}
          profession = {user.profession}
          />
        ))}
      </div>
    </div>
  )
}

export default App