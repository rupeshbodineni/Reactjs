let ContactList = (props)=>{
    let SelContactHandler=(user)=>{
        //console.log(user.name.first)
        props.getSelContact(user);
    }
    return <div className="mt-4">
                <h2 className="mb-3 text-primary">Contact List</h2>
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                    <tr>
                        <th className="text-white">User Id</th>
                        <th className="text-white">Name</th>
                        <th className="text-white">City</th>
                        <th className="text-white">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.users.map((user,index)=>{
                            return <tr key={index} onClick={SelContactHandler.bind(null,user)}>
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