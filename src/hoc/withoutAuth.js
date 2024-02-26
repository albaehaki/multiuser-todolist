
// import { useRouter } from 'next/navigation';
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { DataLoginContext, DataContext } from "../Context";
import { useNavigate } from "react-router-dom";
// store
// import useSignInStore from '@/store/signInStore';


const withoutAuth = (WrappedComponent) => {
  // const router = useRouter();
    // const loading = useSignInStore((state) => state.loading)
    

  const ComponentWithAuth = (props) => {
    const navigate = useNavigate();
    const { email, setEmail, password, setPassword, loginLoading, setLoginLoading } =
    useContext(DataLoginContext);
    const { isLoading, setIsLoading } = useContext(DataContext);
    const token = window.sessionStorage.getItem('token');
    // console.log(token);
    useEffect(() => {
     

      if (token !== null) {
        // router.push("/home");
        // console.log("ada token");
        return navigate(`/dasboard`);
      }
    }, []);
    
    useEffect(() => {
      if (token !== null) {
        // router.push("/home");
        return  navigate(`/dasboard`);
      }
    }, [isLoading]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withoutAuth;