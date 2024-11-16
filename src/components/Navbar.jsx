import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="text-center p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600">Tailwind CSS is Working!</h1>
      <p className="mt-4 text-gray-500">This is a simple test component.</p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        Test Button
      </button>
    </div>
  </div>
  )
}

export default Navbar

