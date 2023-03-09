import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(`${process.env.RE_URI}/login`, {
        username: username,
        password: password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.RE_URI);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" >
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              name="password"
              id="username"
              value={username}
            />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              value={password}
            />
          </div>

          <button type="submit">login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
