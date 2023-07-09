import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Signup() {
  return (
    <div>
      <center>
        <div
          style={{
            paddingTop: 140,
            paddingBottom: 20,
          }}
        >
          <Typography variant={"h6"}>
            Welcome to My Course. Sign up below
          </Typography>
        </div>{" "}
        <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            id="outlined-basic"
            fullWidth="true"
            label="Email"
            variant="outlined"
          />{" "}
          <br />
          <br />
          <TextField
            id="outlined-basic"
            fullWidth="true"
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <Button size="large" variant="contained">
            Sign up
          </Button>
        </Card>
      </center>
    </div>
  );
}
export default Signup;
