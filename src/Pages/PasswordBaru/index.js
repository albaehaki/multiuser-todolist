import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { useLogin } from "../../Hooks/Login/useLogin";
import { Password } from "@mui/icons-material";

const Login = () => {
  const {
    typeViewPassword,
    setTypeViewPassword,
    typeViewConfirmPassword,
    setTypeViewConfirmPassword,
  } = useLogin();
  return (
    <>
      <Container
        sx={{
          display: "grid",
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Typography variant="h2">Selamat Datang</Typography> */}
        <form
        // sx={{
        //   margin: "auto",
        // }}
        >
          <Grid
            sx={{
              margin: "auto",
              gap: 2,
              width: "450px",
            }}
            // alignContent="center"
            direction="row"
            container
          >
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: 600,
                  mb: "20px",
                }}
                align="center"
                variant="h1"
              >
                Password Baru
              </Typography>
            </Grid>
            {/* Password */}
            <Grid item xs={12}>
              <Stack
                sx={{
                  display: "felx",
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <TextField
                  // sx={{ pr: "20px" }}
                  label="Password"
                  type={typeViewPassword ? "text" : "Password"}
                  fullWidth
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "14px",
                    top: "8px",
                    backgroundColor: "white",
                  }}
                  onClick={() => setTypeViewPassword(!typeViewPassword)}
                >
                  <Password />
                </IconButton>
              </Stack>
            </Grid>
            {/* Akhir Password */}
            {/* Confirm Password */}
            <Grid item xs={12}>
              <Stack
                sx={{
                  display: "felx",
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <TextField
                  // sx={{ pr: "20px" }}
                  label="Confirm Password"
                  type={typeViewConfirmPassword ? "text" : "Password"}
                  fullWidth
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "14px",
                    top: "8px",
                    backgroundColor: "white",
                  }}
                  onClick={() =>
                    setTypeViewConfirmPassword(!typeViewConfirmPassword)
                  }
                >
                  <Password />
                </IconButton>
              </Stack>
            </Grid>
            {/* Akhir Confirm Password */}
            <Grid item xs={12}>
              <Button
                fullWidth
                sx={{
                  border: "1px solid lightgray",
                  padding: "10px",
                  fontSize: "25px",
                }}
              >
                Kirim
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Login;
