import React, { useState } from "react";
import { login } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Welcome back!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.error("Wrong username or password", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(
          "Error signing in. User does not exist if not contact support",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      }
      console.log(error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Jump back in!</h1>
            <p className="py-6">
              Don't sweat.... it's just gonna take a minute
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-xl">
        Not yet signed up? <Link to={`/register`}>Register</Link>
      </p>
    </div>
  );
};

export default Login;
