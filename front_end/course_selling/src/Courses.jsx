import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {courses.map((e) => {
        return <Course course={e}></Course>;
      })}
    </div>
  );
}
function Course(props) {
  return (
    <Card style={{ width: 300, margin: 10, minHeight: 200 }}>
      <Typography variant="h5" textAlign="center">
        {props.course.title}
      </Typography>
      <Typography variant="subtitle2" textAlign="center">
        {props.course.description}
      </Typography>
      <img src={props.course.imageLink} style={{ width: 300 }}></img>
    </Card>
  );
}

export default Courses;
