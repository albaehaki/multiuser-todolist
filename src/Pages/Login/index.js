import React from "react";
import {
  Button,
  IconButton,
  TextField,
  Grid,
  Container,
  Typography,
  Stack,

} from "@mui/material";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../../Hooks/Login/useLogin";
import { Password } from "@mui/icons-material";
import withoutAuth from "../../hoc/withoutAuth";

const Login = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { typeViewPassword, setTypeViewPassword, SignIn } = useLogin();
  const OnSubmit = (e) => {

    SignIn(e);
  };

  return (
    <>
      <Container
        maxWidth={"100vw"}
        sx={{
          display: "flex",
          height: "100vh",
          width: "100",
          
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
              
              px: "100px",
              
            }}
          
            direction="row"
            container
          >
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: 600,
                 
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

export default withoutAuth(Login);
