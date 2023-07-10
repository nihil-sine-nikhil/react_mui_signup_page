import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Signin() {
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
          Welcome back. Sign in below
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
            Sign in
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Signin;
