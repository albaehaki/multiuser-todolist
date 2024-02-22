
// import { useRouter } from 'next/navigation';
import { useEffect, useContext } from "react";
import { DataLoginContext, DataContext } from "../Context";
import { useNavigate } from "react-router-dom";

// store 
// import useSignInStore from '@/store/signInStore';
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    // const router = useRouter();
    // const loading = useSignInStore((state) => state.loading)

    const navigate = useNavigate();
    const { email, setEmail, password, setPassword, loginLoading, setLoginLoading } =
    useContext(DataLoginContext);
    const { isLoading, setIsLoading } = useContext(DataContext);
    const token = window.sessionStorage.getItem('token');
    console.log(token);

    useEffect(() => {
     

      if (token === null) {
        // router.push("/sign-in");
        return navigate(`/`);
      }
    }, []);
    useEffect(() => {
     

      if (token === null) {
        // router.push("/sign-in");
        return navigate(`/`);
      }
    }, [isLoading]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;