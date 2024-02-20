import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupUser } from "@/api/auth/authentication";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import MainHeader from "@/layout/MainHeader/MainHeader";

type signupProps = {
  email: string;
  name: string;
  password: string;
};

const Signup = () => {
  
  const navigate = useNavigate();

  const SignUpSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
  });

  type SignUpSchemaType = z.infer<typeof SignUpSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const handleSignup = async (data: signupProps) => {
    const { error } = await signupUser(data);
    if (!error) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="signup-page">
      <MainHeader theme="dark" />
      <div className="signup-page-wrapper">
        <div className="signup-page-wrapper-top">
          <h1 className="signup-page-heading">Sign Up</h1>
          <hr className="side-line" />
          <div className="signup-page-form-wrapper">
            <p className="signup-page-paragraph">
              Secure solution for your digital money
            </p>
            <form
              className="signup-page-form"
              onSubmit={handleSubmit((data) => handleSignup(data))}
            >
              <input type="text" id="name-field" {...register("name")} placeholder="name" />
              {errors.name && <span>{errors.name?.message}</span>}
              <input type="text" id="email-field" {...register("email")} placeholder="email" />
              {errors.email && <span>{errors.email?.message}</span>}
              <input
                type="password"
                className="passwordInput"
                {...register("password")}
                placeholder="Choose A Password"
                id="password-field"
              />
              {errors.password && <span>{errors.password?.message}</span>}
              <button type="submit" className="createAccountBtn">
                CREATE ACCOUNT
              </button>
            </form>
            <div className="testimonial">
              <h2 className="testimonial-primary">20K+ CUSTOMERS</h2>
              <span className="testimonial-secondary">
                60+ employees worldwide
              </span>
            </div>
          </div>
          <span className="log-in-message">
            Already have an account?{" "}
            <Link to="/login" className="link-element" id="linkType-login">
              Log In
            </Link>
          </span>
        </div>
        <footer className="signup-page-footer">
          <ol className="signup-page-socials">
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
          <ul className="signup-page-footer-elements">
            <li className="signup-page-footer-element">
              <span>Terms of service</span>
            </li>
            <li className="signup-page-footer-element">
              <span>Contact</span>
            </li>
            <li className="signup-page-footer-element">
              <span>Support</span>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
