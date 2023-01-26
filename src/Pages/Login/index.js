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
    // console.log(e);
    SignIn(e);
  };
  // console.log({ errors });
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
          backgroundColor: "Gray",
        }}
      >
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
              // pl: "50px",
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
                  // mb: "50px",
                  color: "GrayText",
                }}
                align="center"
                variant="h1"
              >
                Sistem Informasi Work From Home
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  mb: "50px",
                  color: "GrayText",
                }}
                align="center"
                variant="h6"
              >
                JasaWebSEO.net
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    backgroundColor: "white",
                  },
                }}
                label="Email"
                fullWidth
                type="email"
                // value={email}
                // onChange={OnChangeEmail}
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && (
                <Typography>harus diisi</Typography>
              )}
            </Grid>
            <Grid sx={{ pt: "30px" }} item xs={12}>
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
              {errors?.password?.type === "required" && (
                <Typography>harus diisi</Typography>
              )}
            </Grid>
            <Grid sx={{ pt: "30px" }} item xs={12}>
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
                  backgroundColor: "white",
                  borderRadius: "20px",
                  color: "GrayText",
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
