import React from 'react'

const List = ({ students }) => {
  return (
    <div className='card p-4 h-100'>
      <h4 className='mb-4'>Student List</h4>
      {students.length === 0 ? (
        <p className='text-muted'>No students have been added yet.</p>
      ) : (
        <div className='list-group'>
          {students.map(student => (
            <div key={student.id} className='list-group-item'>
              <div className='fw-bold'>{student.name}</div>
              <div className='text-muted'>{student.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default List
