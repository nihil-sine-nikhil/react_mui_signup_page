import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          Welcome to CourseMera. Sign up below
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
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="outlined"
            fullWidth={true}
            style={style}
          />
          <TextField
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            style={style}
          />
          <Button
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-Type": "application/json",
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
            Sign up
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Signup;
