import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./login.css";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://ConnectCircleBackend.vids18.repl.co/auth/login",
        {
          user: {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("UserId", response.data.user._id);
        navigate("/");
      }
      return setErrorMessage(response.data.errMsg);
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  return (
    <section className="background">
      <div className="login">
        <div className="login__bg">
          <div className="login__form">
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={(e) => submitHandler(e)} className="form">
              <h2 className="heading-primary">Welcome Back!</h2>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  id="email"
                  placeholder="Email address"
                  ref={emailRef}
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  id="password"
                  placeholder="Password"
                  minlength="6"
                  maxlength="10"
                  ref={passwordRef}
                  required
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <div className="form__last-group">
                <button className="login-btn">Submit</button>
                <Link to="/signup" className="form__link">
                  New User?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
