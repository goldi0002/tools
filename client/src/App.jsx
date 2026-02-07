import { useEffect, useState } from "react";
import { api } from "./api/http";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    api.get("http://localhost:5000/health").then(res => setStatus(res.data.status));
  }, []);

  return <h1>Backend status: {status}</h1>;
}

export default App;
