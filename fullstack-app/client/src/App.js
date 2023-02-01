import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/users/all")
        .then((res) => setUsers(res.data.updatedUsers) );
       
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="header">
      <header className="App-header">
        Users
        <ul>
          {users.map((user) => (
            <li key={crypto.randomUUID()}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
