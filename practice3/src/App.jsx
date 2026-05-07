import React from "react";
import axios from "axios";

const App = () => {

  const addUser = () => {
    console.log("POST clicked");
    axios.post("https://jsonplaceholder.typicode.com/users", {
      name: "Rupesh"
    }).then(res => console.log(res.data));
  };

  const updateUser = () => {
    console.log("PUT clicked");
    axios.put("https://jsonplaceholder.typicode.com/users/1", {
      name: "Updated"
    }).then(res => console.log(res.data));
  };

  const deleteUser = () => {
    console.log("DELETE clicked");
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
      .then(() => console.log("Deleted"));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>API Operations</h2>

      <button onClick={addUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={deleteUser}>DELETE</button>
    </div>
  );
};

export default App;