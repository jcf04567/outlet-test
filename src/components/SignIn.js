import { Navigate, useNavigate } from "react-router-dom";
import { useSignInContext } from "../context/signinContext";

const SignIn = () => {
  const [signIn, setSignIn] = useSignInContext();
  const navigate = useNavigate();
  const handleSignIn = () => {
    setSignIn(true);
    window.localStorage.setItem("outletAppSignIn",true);
    navigate("/");
  }
  return (
    <>
      {signIn ? (<Navigate to="/" />) : (
        <div>
          <h2>SignIn画面です</h2>
          <button onClick={handleSignIn}>SignIn</button>
          <button onClick={() => {navigate("/signup")}}>SignUp</button>
        </div>
      )}
    </>
  );
};

export default SignIn;
