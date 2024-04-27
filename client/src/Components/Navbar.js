import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  function userLogout() {
    localStorage.removeItem('token');
    navigate('/userlogin')
  }

  return (
    <AppBar overflow="hidden" position="static" >
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              PRAYATNA
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/addmatch" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Add Match
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {token ? (
              <Button sx={{ p: 0 }} style={{ color: "white" }} onClick={userLogout}>
                Logout
              </Button>
            ) : (
              <Link to="/userlogin" style={{ textDecoration: "none" }}>
                <Button sx={{ p: 0 }} style={{ color: "white" }}>
                  <AccountCircleIcon
                    fontSize="large"
                    style={{ color: "white" }}
                  />
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
