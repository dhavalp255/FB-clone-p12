import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../backendConnet/firebase";
import { useStateValue } from "../backendConnet/StateProvider";
import { actionTypes } from "../backendConnet/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__info">
        <h1>facebook</h1>
        <h2>
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>

      <div className="login__logo">
        <div className="login__logoContainer">
          <h4>Login with Google</h4>
          <h6>
            Don't worry it's total secure I don't know your infomation accept
            your Email ID.
          </h6>

          <Button type="submit" onClick={signIn}>
            Sign In
          </Button>
        </div>
        <p>
          <span> Create a Page </span>for a celebrity, band or business.
        </p>
      </div>
    </div>
  );
}

export default Login;
