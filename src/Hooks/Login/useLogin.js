import React, { useState, useContext } from "react";
import { DataLoginContext, DataContext } from "../../Context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  ref,
  onValue,
  set,
  remove,
  update,
  getDatabase,
} from "firebase/database";
// import app from "../../Services/firebase/app";
// import { useHome } from "../../Context/Data"
import { useNavigate } from "react-router-dom";
import { initializeApp, getApps } from "firebase/app";
import app from "../../Services/firebase";

export const useLogin = () => {
  const realtimedb = getDatabase(app);
  const { email, setEmail, password, setPassword, loginLoading, setLoginLoading, fireUuid, setFireUuid } =
    useContext(DataLoginContext);
  const { isLoading, setIsLoading } = useContext(DataContext);
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

const OnChangeUuid = (e) => {
  // setFireUuid(e.email);
};

  const SignIn = async (data) => {
    setIsLoading(false);
    // this.setLoginLoading(true);
    await signInWithEmailAndPassword(firebase, data.email, data.password)
      .then((res) => {
        const user =  res.user;
        // console.log("berhasil");
        // console.log(res.user.uid);
        console.log(user.email, "dari use login");
        OnChangeUuid(user)
        // setFireUuid(user.email);
        // console.log(res._tokenResponse);
        
        // setUid(res.user.uid);
        // if (res.user.uid) {
        // navigate(`/dasboard`);
        // }
        user.getIdToken()
      .then((token) => {
        // console.log("token",token);
        window.sessionStorage.setItem("token", token);
        // handleChange("loading","")
        // setLoginLoading(false);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log("error token",error);
        // setLoginLoading(false);
        setIsLoading(true);
      })
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err.message);
      });
  };

  const SignUp = async (data) => {
    await createUserWithEmailAndPassword(firebase, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential.user.uid);

        if (userCredential.user.uid) {
          // setIsLoading(true);
          set(ref(realtimedb, `todolist/users/${userCredential.user.uid}`), {
            name: data.name,
            email: userCredential.user.email,
            role: "none",
            uid: userCredential.user.uid,
            createAt: Date.now(),
          })
            .then((res) => {
              // setJudulCard("");
              setIsLoading(false);
              // GetData();
            })
            .catch((error) => {
              // setJudulCard("");
              console.log(error);
              // setIsLoading(false);
            });
        }


        navigate(`/`);
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
    fireUuid,
    setFireUuid,
    isLoading,
    setIsLoading,
    fireUuid, setFireUuid,
  };
};
