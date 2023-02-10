import React from "react";
// import { useRouter } from "next/dist/client/router";
// import { useUser } from "../context/user.js";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../Hooks/Login/useLogin";
import { Navigate } from "react-router-dom";
const withProtected = (Pages) => {
  return (props) => {
    // const router = useRouter();
    // const user = useUser();
    // const { uid } = user;
    const navigate = useNavigate();
    const { fireUuid, setFireUuid, isLoading, setIsLoading } = useLogin();
    console.log(fireUuid);
    if (isLoading && !fireUuid) {
      // return navigate("/login");

      return <Navigate to="/login" replace={true} />;
    } else {
      return <Pages {...props} />;
    }
  };
};

export default withProtected;
