import { useState } from "react";

let Login = ()=>{
    let [tc,setTC] = useState(true);
    let tcHandler = (event)=>{
        setTC(!event.target.checked)
    }
    return <div>
                <form>
                Email : <input type="text" /> <br />
                Password: <input type="text" /><br />
                <input type="checkbox" onClick={tcHandler}/> Please Accept  Tc<br />

                <input type="submit" value={"Login"} disabled={tc}/>
                </form>
            </div>
}
export default Login;