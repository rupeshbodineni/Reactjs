import Emp from "./Emp";
let User=()=>{
    let uname="Rahul Gandhi";
    let gender="Male";
    let salary=45000.45;
    return <div>
            <h3>User Component</h3>
            <hr/>
            <Emp ename={uname} gender={gender} salary={salary}/>
    </div>
}
export default User;