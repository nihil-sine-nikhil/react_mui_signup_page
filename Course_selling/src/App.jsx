import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Signup></Signup>
      {/* <TodoApp nikhil={"name"}></TodoApp> */}
    </div>
  );
}
function TodoApp(props) {
  return <div>{props.nikhil}</div>;
}

export default App;
