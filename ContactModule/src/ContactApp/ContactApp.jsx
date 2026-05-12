import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import Axios from 'axios';
const ContactApp = () => {
  let [users,setUsers]=useState([]);
  let [selUser,setSelUser]=useState({});
  useEffect(()=>{
    let url='https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'
    Axios.get(url)
    .then((resp)=>{setUsers(resp.data)})
    .catch()
  },[])
  let getSelContact=(user)=>{
    console.log(user.name.first)
    setSelUser(user)
  }
  return <div className='container mt-5'>
        <h2 className="mb-4 text-center text-primary">Contact Management</h2>
        <div className="row g-4">
          <div className="col-lg-8 col-md-12">
           {
                  users.length>0 ? <>
                  <ContactList  users={users} getSelContact={getSelContact}/>
                  </>:<div className="alert alert-info" role="alert">No Data Available</div>
                }
          </div>
          <div className="col-lg-4 col-md-12">
                {
                  Object.keys(selUser).length>0?
                  <>
                  <ContactDetails selUser={selUser}/>
                  </>:<div className="alert alert-warning" role="alert">Select a Contact</div>
                }
          </div>
        </div>
                
                <hr/>
                
               
                
                
            </div>
}

export default ContactApp