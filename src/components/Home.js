import { useNavigate } from "react-router-dom";
import { useSignInContext } from "../context/signinContext";

const Home = () => {
  const [signIn, setSignIn] = useSignInContext();
  const navigate = useNavigate();
  const handleSignOut = () => {
    window.localStorage.removeItem("outletAppSignIn");
    setSignIn(false);
    navigate('/signin');
  }
  return (
      <div>
        <h2>Home画面です。{signIn ? '(サインイン状態)' : '(不正サインイン)'}</h2>
        <button onClick={handleSignOut}>SignOut</button>
      </div>
  );
};

export default Home;
