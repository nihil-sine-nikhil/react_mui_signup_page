import { useState } from "react";
import "./App.css";
import Signup from "./Signup";
import Appbar from "./Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Addcourse from "./Addcourse";
import Courses from "./Courses";
import Course from "./Course";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      {" "}
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
      >
        <Router>
          <Appbar></Appbar>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/addcourse" element={<Addcourse />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/admin/courses" element={<Courses />} />
          </Routes>
        </Router>
      </div>{" "}
    </RecoilRoot>
  );
}

export default App;
