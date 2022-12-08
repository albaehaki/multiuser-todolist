import React, { useState, useContext } from "react";
import { DataLoginContext } from "../../Context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp, getApps } from "firebase/app";
import app from "../../Services/firebase";

export const useLogin = () => {
  const { email, setEmail, password, setPassword } =
    useContext(DataLoginContext);
  const [typeViewPassword, setTypeViewPassword] = useState(false);
  const [typeViewConfirmPassword, setTypeViewConfirmPassword] = useState(false);
  const firebase = getAuth();
  const navigate = useNavigate();
  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const OnChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const SignIn = async (data) => {
    await signInWithEmailAndPassword(firebase, data.email, data.password)
      .then((res) => {
        console.log("berhasil");
        console.log(res.user.uid);
        // setUid(res.user.uid);
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const SignUp = async (data) => {
    await createUserWithEmailAndPassword(firebase, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential);

        navigate(`/login`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const ResetPassword = async (data) => {
    await sendPasswordResetEmail(firebase, data.email)
      .then((res) => {
        // Password reset email sent!
        // ..
        // console.log(res);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return {
    typeViewPassword,
    setTypeViewPassword,
    typeViewConfirmPassword,
    setTypeViewConfirmPassword,
    OnChangeEmail,
    OnChangePassword,
    email,
    password,
    SignIn,
    SignUp,
    ResetPassword,
  };
};
