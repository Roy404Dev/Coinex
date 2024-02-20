import { logInUser } from "@/api/auth/authentication";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import "./Login.scss";
import MainHeader from "@/layout/MainHeader/MainHeader";
import { useState } from "react";
import { AuthError } from "@supabase/supabase-js";
type loginProps = {
  email: string;
  password: string;
};
const Login = () => {
  const [loginError, setLoginError] = useState<AuthError | null>(null);

  const logInSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const navigate = useNavigate();

  type logInSchema = z.infer<typeof logInSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<logInSchema>({
    resolver: zodResolver(logInSchema),
  });

  const handleLogin = async (data: loginProps) => {
    const { error } = await logInUser(data);
    if (!error) {
      navigate("/dashboard");
    }
    setLoginError(error);
  };
  return (
    <div className="login-page">
      <MainHeader theme="dark" />
      <div className="login-page-wrapper">
        <div className="login-page-wrapper-top">
          <h1 className="login-page-heading">Log In</h1>
          <hr className="side-line" />
          <div className="login-page-form-wrapper">
            <p className="login-page-paragraph">
              Secure solution for your digital money
            </p>
            <form
              className="login-page-form"
              onSubmit={handleSubmit((data) => handleLogin(data))}
            >
              <input type="text" placeholder="email" {...register("email")} />
              {errors.email && <span>{errors.email.message}</span>}
              <input
                type="password"
                placeholder="password"
                className="passwordInput"
                {...register("password")}
              />
              {loginError ? (
                <span className="error-message">{loginError.message}</span>
              ) : (
                ""
              )}
              <button type="submit" className="logInBtn">
                <span>LOG IN</span>
              </button>
            </form>
            <div className="testimonial">
              <h2 className="testimonial-primary">5K+ WALLETS</h2>
              <span className="testimonial-secondary">300K+ TRANSACTIONS</span>
            </div>
          </div>
          <span className="login-message">
            Forgot password? · Don't have an accoun{" "}
            <Link to="/signup" id="linkType-signup">
              Sign Up
            </Link>
          </span>
        </div>
        <footer className="login-page-footer">
          <ol className="login-page-socials">
            <li className="social-link">
              <Link to="#">facebook</Link>
            </li>
            <li className="social-link">
              <Link to="#">twitter</Link>
            </li>
            <li className="social-link">
              <Link to="#">blog</Link>
            </li>
          </ol>
          <ul className="login-page-footer-elements">
            <li className="login-page-footer-element">
              <span>Terms of service</span>
            </li>
            <li className="login-page-footer-element">
              <span>Contact</span>
            </li>
            <li className="login-page-footer-element">
              <span>Support</span>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Login;
