import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Appbar() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between", padding: 8 }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
          }}
        >
          COURSEMERA
        </Typography>
        <div>
          <Button
            onClick={() => {
              window.location = "/signup";
            }}
            variant="contained"
            style={{ marginRight: 20, textAlign: "center" }}
          >
            Sign up
          </Button>{" "}
          <Button
            onClick={() => {
              window.location = "/signin";
            }}
            variant="contained"
            style={{}}
          >
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
}
export default Appbar;
