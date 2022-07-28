import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/StorageKeys";

import "../Login/LoginForm.css";

const usernameConfig = {
  required: true,
  minLength: 3,
};

// The form for logging in with relevant functions such as logging in, creating a new user if not existing.
// Moves user to translation page when logging in or creating a new user and logging in.
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();

  // Local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  // Side effects
  useEffect(() => {
    if (user !== null) {
      navigate("translation");
    }
  }, [user, navigate]); // Empty dependencies - Only run once

  // Event handlers
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  // render functions
  // error messages and input validation
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>Username is too short (minimum 3)</span>;
    }
  })();

  return (
    <div className="login-main">
      <h2 className="login-text">What's your name?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="login-fieldset">
          <input
            type="text"
            placeholder="Moshi Hoshi"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
          <button type="submit" disabled={loading}>
            Log in
          </button>
        </fieldset>

        {loading && <h2 className="login-text">Logging in...</h2>}
        {apiError && <p>{apiError}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
