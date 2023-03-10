import "./App.css";
import Layout from "./components/Layout";
import AuthState from "./context/AuthState";

function App() {
  return (
    <div className="App-header">
      <AuthState>
        <Layout />
      </AuthState>
    </div>
  );
}

export default App;
