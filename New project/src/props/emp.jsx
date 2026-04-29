import react from "./react"
class emp extends react.component{
    render(){
        return <div>
            <h2>employee component</h2>
            <pre>{JSON.stringify(props)}</pre>
            <h2>emp id:{props.eid}</h2>
        </div>
        
    }
}
export default emp