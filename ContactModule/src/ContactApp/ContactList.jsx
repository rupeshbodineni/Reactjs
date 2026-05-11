let ContactList = (props)=>{

    return <div>
                <h2>ContactList Comp</h2>
                <pre>{JSON.stringify(props)}</pre>
                <table border={2}>
                    <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.users.map((user,index)=>{
                            return <tr key={index}>
                                        <td>{user.login.uuid.substring(32)}</td>
                                        <td>{user.name.first}</td>
                                        <td>{user.location.city}</td>
                                        <td>{user.email}</td>
                                    </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
}
export default ContactList;