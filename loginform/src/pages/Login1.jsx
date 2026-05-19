import { useRef} from "react";
let Login = ()=>{
    let buttonElement=useRef(null);
    let tcHandler = (event)=>{
       if(event.target.checked == true){
        buttonElement.current.disabled=false;
       }
       else{
        buttonElement.current.disabled=true;
       }
    }
    return <div><form>
                Email : <input type="text" /> <br /> Password: <input type="text" /><br />
                <input type="checkbox" onClick={tcHandler} /> Please Accept Terms & conditions <br />
                <input disabled={true} type="submit" value={"Login"} ref={buttonElement} />
                </form>
            </div>
}
export default Login;