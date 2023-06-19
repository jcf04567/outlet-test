import { Navigate } from "react-router-dom";
import { useSignInContext } from "../context/signinContext";


const PrivateRoute = ({children}) => {
  const [signIn] = useSignInContext();
  return(
    <>
      {signIn ? children : (<Navigate to="/signin" />)}
    </>
  );
}

export default PrivateRoute;
