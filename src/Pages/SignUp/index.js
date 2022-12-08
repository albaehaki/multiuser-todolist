import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Password } from "@mui/icons-material";
import { useLogin } from "../../Hooks/Login/useLogin";

const Login = () => {
  const {
    typeViewPassword,
    setTypeViewPassword,
    typeViewConfirmPassword,
    setTypeViewConfirmPassword,
    SignUp,
  } = useLogin();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const OnSubmit = (e) => {
    console.log(e);
    // SignIn(e);
    SignUp(e);
  };
  console.log({ errors });
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
          onSubmit={handleSubmit(OnSubmit)}
        >
          <Grid
            sx={{
              margin: "auto",
              gap: 2,
              // width: "450px",
              pr: "50px",
              pl: "50px",
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
                Daftar
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                {...register("email", { required: true })}
              />
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
                  {...register("password", {
                    required: true,
                  })}
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
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
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
                type="submit"
                sx={{
                  border: "1px solid lightgray",
                  padding: "10px",
                  fontSize: "25px",
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Login;
