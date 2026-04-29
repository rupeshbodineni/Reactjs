import React,{useState} from "react"
const Message=()=>{
  let[Msg,setMsg]=useState("Hello world")
  let updateHandler=(value)=>{
    setMsg(value)
  }
   
  return <div>
    <h1>Message Component</h1>
    <h2>value={Message}</h2>
    <button onClick={updateHandler(null,"GM")}>GM</button>
    <button onClick={updateHandler(null,"Gn")}>Gn</button>
    <button onClick={updateHandler(null,"Ge")}>Ge</button>
    <button onClick={updateHandler(null,"Ga")}>Ga</button>
  </div>
}
export default Message1