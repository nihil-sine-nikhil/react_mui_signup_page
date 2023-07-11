import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Addcourse() {
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  let style = { margin: 10 };
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 120 }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
          }}
        >
          Add a new course
        </Typography>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 120,
        }}
      >
        <Card
          variant="outlined"
          style={{
            padding: 20,
            width: 500,
            borderRadius: 20,
            //   display: "flex",
          }}
        >
          <TextField
            label="Course name"
            onChange={(e) => {
              setCourse(e.target.value);
            }}
            variant="outlined"
            fullWidth={true}
            style={style}
          />
          <TextField
            label="Description "
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            variant="outlined"
            fullWidth={true}
            style={style}
          />
          <TextField
            label="Image Link "
            onChange={(e) => {
              setImage(e.target.value);
            }}
            variant="outlined"
            fullWidth={true}
            style={style}
          />

          <Button
            onClick={() => {
              fetch("http://localhost:3000/admin/courses", {
                method: "POST",
                body: JSON.stringify({
                  title: course,
                  description,
                  imageLink: image,
                  published: true,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }).then((res) => {
                res.json().then((data) => {
                  console.log(data);
                  alert(JSON.stringify(data));
                });
              });
            }}
            variant="contained"
            style={{ margin: 20 }}
          >
            Add
          </Button>
        </Card>
      </div>
    </>
  );
}
export default Addcourse;
