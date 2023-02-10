import React from "react";
// import { useRouter } from "next/dist/client/router";
// import { useUser } from "../context/user.js";
import { useLogin } from "../Hooks/Login/useLogin";
import { Navigate } from "react-router-dom";
const withUnprotected = (Pages) => {
  return (props) => {
    // const router = useRouter();
    // const user = useUser();
    // const { uid } = user;
    const { firUuid, setFirUuid } = useLogin();

    if (firUuid) {
      // router.replace("/dasboard");
      return <Navigate to="/" replace={true} />;
      // return <></>;
    }
    return <Pages {...props} />;
  };
};

export default withUnprotected;
