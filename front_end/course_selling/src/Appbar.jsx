import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Appbar() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">COURSEMERA</Typography>
        <div>
          <Button
            variant="contained"
            style={{ margin: 20, textAlign: "center" }}
          >
            Sign up
          </Button>
          <Button variant="contained" style={{ margin: 20 }}>
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
}
export default Appbar;
