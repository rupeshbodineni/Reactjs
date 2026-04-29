import react from "./react"
import emp from "./emp"
class user extends react.component{
   uname="Rahul"
   uid=101
   location=["wayanad","banglore"]

    render(){
        return <div>
            <h3>user component</h3>
            <emp uname={this.ename}
                uid={this.uid} />

            <emp/>
        </div>
    }

}
export default user