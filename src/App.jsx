import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const salary = form.salary.value;
    const user = { name, salary };
    console.log(user);

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        const newUser = [...user, data];
        setUsers(newUser);
        form.reset();
      })

  }


  return (
    <>
      <div>
        <h1>User Management System</h1>
        <h3>Number of users: {users.length}</h3>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="number" name="salary" id="" />
          <br />
          <input type="submit" value="Add User" />
        </form>
        <div>
          {
            users.map(users => <p key={users.id}>{users.id} {users.name} {users.salary}</p>)
          }
        </div>

      </div>

    </>
  )
}

export default App
