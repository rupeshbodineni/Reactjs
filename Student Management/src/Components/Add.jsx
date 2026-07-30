import React, { useState } from 'react'

const Add = ({ setStudents }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (!name.trim()) return

    setStudents(prevStudents => [
      ...prevStudents,
      { id: Date.now(), name: name.trim(), email: email.trim() }
    ])

    setName('')
    setEmail('')
  }

  return (
    <div className='card p-4 h-100'>
      <h4 className='mb-4'>Add Student</h4>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Enter student name'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Enter student email'
          />
        </div>
        <button type='submit' className='btn button-primary w-100'>
          Add Student
        </button>
      </form>
    </div>
  )
}

export default Add
