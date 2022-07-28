import LoginForm from "../components/Login/LoginForm";
import Navbar from "../components/Navbar/Navbar";
const Login = () => {
  return (
    <>
      <Navbar page={"Login"} />
      <LoginForm></LoginForm>
    </>
  );
};

export default Login;
