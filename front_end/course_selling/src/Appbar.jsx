import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        if (data.username) {
          setUserEmail(data.username);
          // setLoading(false);
        }
      });
    });
  }, []);
  // if (isLoading) {
  //   return <div></div>;
  // }
  if (userEmail) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 8,
          }}
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
              // onClick={() => {
              //   navigate("/signup");
              //  }}
              variant="contained"
              style={{ marginRight: 20, textAlign: "center" }}
            >
              {userEmail}
            </Button>
            <Button
              onClick={() => {
                localStorage.setItem("token", null);
                navigate("/signin");
                window.location = "/";
              }}
              variant="contained"
              style={{}}
            >
              Log out
            </Button>
          </div>
        </div>
      </>
    );
  }
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
