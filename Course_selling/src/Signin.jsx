import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Signin() {
  return (
    <div>
      <div
        style={{
          paddingTop: 140,
          paddingBottom: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>Welcome back. Sign in below</Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <Card
          variant={"outlined"}
          style={{
            width: 400,
            padding: 20,
          }}
        >
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
            Sign in
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default Signin;
