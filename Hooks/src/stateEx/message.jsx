import React, { useState } from 'react'
const Message = () => {
    let [msg,setMsg] = useState("Hello");
    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    let gnHandler = ()=>{
        setMsg("Good Night")
    }
  return  <div>
                <h3>Message Component</h3>
                <h3>Value:{msg}</h3>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gnHandler}>GN</button>
            </div>
}

export default Message  
 