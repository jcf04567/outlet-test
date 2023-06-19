import { Navigate, Outlet } from "react-router-dom";
import { useSignInContext } from "../context/signinContext";


const PublicRoute = ({children}) => {
  const [signIn] = useSignInContext();
  return(
    <>
      {signIn ? (<Navigate to="/"/>) : <Outlet />}
    </>
  );
}

export default PublicRoute;
