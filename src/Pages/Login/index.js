import React from "react";
import {
  Button,
  IconButton,
  TextField,
  Grid,
  Container,
  Typography,
  Stack,
  Box,
} from "@mui/material";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../Hooks/Login/useLogin";
import { Password } from "@mui/icons-material";

const Login = () => {
  // const firebase = getAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { typeViewPassword, setTypeViewPassword, SignIn } = useLogin();
  const OnSubmit = (e) => {
    console.log(e);
    SignIn(e);
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
        <form onSubmit={handleSubmit(OnSubmit)}>
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
                Selamat Datang
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                // value={email}
                // onChange={OnChangeEmail}
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && <p>harus diisi</p>}
            </Grid>
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
                  // value={password}
                  // onChange={OnChangePassword}
                  {...register("password", { required: true })}
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
              {errors?.password?.type === "required" && <p>harus diisi</p>}
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <span
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`/lupa-password`);
                  }}
                >
                  Lupa Password
                </span>{" "}
                /{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/sign-up`);
                  }}
                >
                  Belum punya akun
                </span>
              </Typography>
            </Grid>
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
