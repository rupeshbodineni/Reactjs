import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ContactApp = () => {

  const [user, setUser] = useState([])

  useEffect(() => {

    let url =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"

    axios.get(url)
      .then((resp) => {
        setUser(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div>
      <h2>Contact App</h2>

      <pre>{JSON.stringify(user)}</pre>
      
    </div>
  )
}

export default ContactApp