import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ContactApp = () => {

    let [user, setUser] = useState([])

    useEffect(() => {

        let url = 'https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'

        axios.get(url)
            .then((response) => {
                setUser(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default ContactApp