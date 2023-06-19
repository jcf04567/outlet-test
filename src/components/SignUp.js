import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
      <div>
        <h2>SignUp画面です</h2>
        <button onClick={() => navigate('/signin')}>SignIn</button>
      </div>
  );
};

export default SignUp;
