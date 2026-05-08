import React, { useState } from 'react'

let AddCourse = () => {

  const [courseName, setCourseName] = useState("")
  const [instructor, setInstructor] = useState("")
  const [duration, setDuration] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCourse = {
      courseName,
      instructor,
      duration,
      status
    }

    console.log(newCourse)

    alert("Course Added Successfully")

    setCourseName("")
    setInstructor("")
    setDuration("")
    setStatus("")
  }

  return (
    <div className="form-container">

      <h2>Add Course</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Instructor Name"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <button type="submit">
          Add Course
        </button>

      </form>

    </div>
  )
}

export default AddCourse