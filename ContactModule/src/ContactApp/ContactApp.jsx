import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'

const ContactApp = () => {

  let [users, setUsers] = useState([])

  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=10")
      .then((resp) => {
        setUsers(resp.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ContactList users={users} />
    </div>
  )
}

export default ContactApp