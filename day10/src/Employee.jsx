import { useEffect, useState } from "react";
import Axios from "axios";

let Employee = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>Employee Component</h3>

      {users.length > 0 ? (
        <>
         <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
                 <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Employee City</th>
           </tr>
          </thead>

  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.address.city}</td>
      </tr>
    ))}
  </tbody>
</table>
        </>
      ) : (
        <>No Data</>
      )}
    </div>
  );
};

export default Employee;
