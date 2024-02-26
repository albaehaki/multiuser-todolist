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
        maxWidth={"100vw"}
        sx={{
          display: "flex",
          height: "100vh",
          width: "100",
          // alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        {/* <Typography variant="h2">Selamat Datang</Typography> */}
        <form
          style={{
            display: "flex",
            width: "600px",
            margin: "auto",
            backgroundColor: "rgb(255,255,255,0.5)",
            height: "100vh",
          }}
          onSubmit={handleSubmit(OnSubmit)}
        >
          <Grid
            sx={{
              margin: "auto",
              gap: 0,
              // width: "450px",
              px: "100px",
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
                  color: "GrayText",
                }}
                align="center"
                variant="h1"
              >
                Daftar
              </Typography>
            </Grid>
            {/* name */}
            <Grid item xs={12}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    backgroundColor: "white",
                  },
                }}
                label="Name"
                fullWidth
                {...register("name", { required: true })}
              />
            </Grid>
               {/* Email */}
            <Grid sx={{ pt: "10px" }} item xs={12}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    backgroundColor: "white",
                  },
                }}
                label="Email"
                fullWidth
                {...register("email", { required: true })}
              />
            </Grid>
            {/* Password */}
            <Grid sx={{ pt: "10px" }} item xs={12}>
              <Stack
                sx={{
                  display: "felx",
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                      backgroundColor: "white",
                    },
                  }}
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
            <Grid sx={{ pt: "10px" }} item xs={12}>
              <Stack
                sx={{
                  display: "felx",
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                      backgroundColor: "white",
                    },
                  }}
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
            <Grid sx={{ pt: "30px" }} item xs={12}>
              <Button
                fullWidth
                type="submit"
                sx={{
                  border: "1px solid lightgray",
                  padding: "10px",
                  fontSize: "25px",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  color: "GrayText",
                }}
              >
                Daftar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Login;
