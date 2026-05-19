import {useState} from 'react';
let Login=()=>{
    let [tc,setTc]=useState(false)
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let tcHandler=(event)=>{
        setTc(!event.target.checked)
    }
    let EmailHandler=(event)=>{
        setEmail(event.target.value)
    }
    let passwordHandler=(event)=>{
        setPassword(event.target.value)
    }
    return <div>
        <form>
            Email:<input type='text' onChange={EmailHandler}/><br/>
            password:<input type='text' onChange={passwordHandler}/><br/>
            <input type='checkbox' onChange={tcHandler}/> Accept TC<br/>
          <button type='submit' disabled={tc}>Login</button>
        </form>
    </div>
}
export default Login;