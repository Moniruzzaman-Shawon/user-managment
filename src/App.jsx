import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <>
      <div>
        <h1>User Management System</h1>
        <h3>Number of users: {users.length}</h3>

      </div>

    </>
  )
}

export default App
