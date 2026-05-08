import React from 'react'

let Dashboard = () => {
  return (
    <div className="dashboard">

      <h2>Overview</h2>

      <div className="dashboard-container">

        <div className="card">
          <h3>Total Courses</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Completed Courses</h3>
          <p>8</p>
        </div>

        <div className="card">
          <h3>Pending Courses</h3>
          <p>4</p>
        </div>

        <div className="card">
          <h3>Total Students</h3>
          <p>150</p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard