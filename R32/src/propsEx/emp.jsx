let Emp=(props)=>{

    return <div>
            <h3>Emp Component</h3>
            <pre>{JSON.stringify(props)}</pre>
            
            <h3>Emp Name:{props.uname}</h3>
            <h3>Emp Gender:{props.gender}</h3>
            <h3>Emp Salary:{props.salary}</h3>
            </div>
}
export default Emp;