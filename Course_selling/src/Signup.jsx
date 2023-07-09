import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
function Signup() {
  var es = { margin: 20 };
  var xx = { padding: 20 };
  return (
    <div>
      <center>
        <div style={es}>Welcome to My Course. Sign up below</div>
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
