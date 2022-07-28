import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

// Handles page directs, if logged in or not logged in
const withAuth = (Component) => (props) => {
  const { user } = useUser();
  if (user !== null) {
    return <Component {...props} />;
  } else {
    return <Navigate to='/' />;
  }
};

export default withAuth;
