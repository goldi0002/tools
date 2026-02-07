import { useEffect, useState } from "react";
import { api } from "./api/http";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    api.get("https://jokes-e0qo.onrender.com/health").then(res => setStatus(res.data.status));
  }, []);

  return <h1>Backend status: {status}</h1>;
}

export default App;
