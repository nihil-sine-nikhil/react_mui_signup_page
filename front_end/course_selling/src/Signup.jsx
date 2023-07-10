import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Signup() {
  let style = { margin: 10 };
  return (
    <>
      <Typography variant="h6"> Welcom to CourseMera. Sign up below</Typography>
      <Card
        variant="outlined"
        style={{
          padding: 20,
          width: 500,
          //   display: "flex",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth={true}
          style={style}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth={true}
          style={style}
        />{" "}
        <Button variant="contained" style={{ margin: 20 }}>
          Sign up
        </Button>
      </Card>
    </>
  );
}

export default Signup;
