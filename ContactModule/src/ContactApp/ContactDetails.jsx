let ContactDetails=(props)=>{
    return <div>
            <h3 className="mb-3 text-success">Contact Details</h3>
            <div className="card shadow-sm">
                <div className="card-header bg-success">
                <img src={props.selUser.picture.large} alt="profile" className="rounded-circle" style={{width: '120px', height: '120px', objectFit: 'cover'}} />
                </div>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between"><strong>Name:</strong> {props.selUser.name.first} {props.selUser.name.last}</li>
                        <li className="list-group-item d-flex justify-content-between"><strong>Age:</strong> {props.selUser.dob.age}</li>
                        <li className="list-group-item d-flex justify-content-between"><strong>Email:</strong> {props.selUser.email}</li>
                        <li className="list-group-item d-flex justify-content-between"><strong>Phone:</strong> {props.selUser.phone}</li>
                </ul>
                </div>
            </div>
            </div>
}
export default ContactDetails;