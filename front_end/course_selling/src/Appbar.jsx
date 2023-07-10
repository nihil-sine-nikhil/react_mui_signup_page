import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
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
              navigate("/signup");
              // window.location = "/signup";
            }}
            variant="contained"
            style={{ marginRight: 20, textAlign: "center" }}
          >
            Sign up
          </Button>{" "}
          <Button
            onClick={() => {
              navigate("/signin");
              // window.location = "/signin";
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
