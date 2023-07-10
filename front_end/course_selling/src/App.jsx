import { useState } from "react";
import "./App.css";
import Signup from "./Signup";
import Appbar from "./Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Appbar></Appbar>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
