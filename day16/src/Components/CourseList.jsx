import React from 'react'

let CourseList = () => {

  const courses = [
    {
      id: 1,
      name: "React JS",
      instructor: "Rahul",
      duration: "2 Months",
      status: "Completed"
    },

    {
      id: 2,
      name: "Node JS",
      instructor: "Kiran",
      duration: "1 Month",
      status: "Pending"
    },

    {
      id: 3,
      name: "MongoDB",
      instructor: "Anil",
      duration: "20 Days",
      status: "Completed"
    }
  ]

  return (
    <div className="course-section">

      <h2>Course List</h2>

      <div className="course-container">

        {
          courses.map((course) => {
            return (
              <div className="course-card" key={course.id}>

                <h3>{course.name}</h3>

                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>

                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>

                <p>
                  <strong>Status:</strong> {course.status}
                </p>

              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default CourseList