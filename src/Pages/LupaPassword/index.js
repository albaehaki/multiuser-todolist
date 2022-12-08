import React from "react";
import { Button, TextField, Grid, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useLogin } from "../../Hooks/Login/useLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { typeViewPassword, setTypeViewPassword, ResetPassword } = useLogin();
  const OnSubmit = (e) => {
    console.log(e);
    // SignIn(e);
    ResetPassword(e);
  };
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
                Lupa Password
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                {...register("email", { required: true })}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
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
