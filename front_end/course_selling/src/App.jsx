import { useState } from "react";
import "./App.css";
import Signup from "./Signup";
import Appbar from "./Appbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Appbar></Appbar>
      <Signup></Signup>
    </div>
  );
}

export default App;
