import React from "react";
import { styled } from "@mui/system";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import AuthModal from "./authentication/AuthModal";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import UserSidebar from "./authentication/UserSidebar";

const Header = () => {
  const navigate = useNavigate();

  // Importing the context API
  const { currency, setCurrency, user } = CryptoState();
  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const TextHeading = styled(Typography)({
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <TextHeading
              onClick={() => {
                navigate("/");
              }}
              variant="h6"
            >
              CryptoPilot
            </TextHeading>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            {/* AuthModal component for login or signup*/}
            {user ? <UserSidebar/> : <AuthModal/>}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
