import { useMemo, useState } from "react";
let Message = ()=>{
    let [counter,setCounter] = useState(1);
    let [number,setNumber]=useState(5);
    //let factResult=fact(number);
    let factResult=useMemo(()=>{return fact(number)},[number]);
    return <div>
                <h2>Message Component</h2>
                <button onClick={()=>{setCounter(counter+1)}}>
                    Counter Value:{counter}
                </button>
                <br/>
                <button onClick={()=>{setNumber(number+1)}}>
                    Factorial of {number} is:{factResult}
                </button>
            </div>
}
export default Message;

let fact=(num)=>{
    console.log("Test Case 123")
    let result=1;
    for(let i=num;i>=1;i--){
        result=result*i;
    }

    return result;
}