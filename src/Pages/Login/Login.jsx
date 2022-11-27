import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/UseToken/UseToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { loginUser, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [token] = useToken(email);

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        setEmail(data.email);
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        if (res.user.email) {
          const userInfo = {
            name: res.user.displayName,
            email: res.user.email,
            role: "buyer",
          };
          fetch("http://localhost:5000/createUser", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.data.acknowledged) {
                setEmail(res.user.email);
                toast.success(`Welcome ${res.user.displayName} to Resell BD`);
              }
            });
        }
      })
      .catch(() => {});
  };

  return (
    <div className="flex justify-center items-center my-5 ">
      <div className="bg-amber-100 p-12 rounded-xl">
        <h2 className="text-center text-4xl mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label>Email</label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              {...register("email", { required: "Email is required." })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label>Password</label>
            <input
              type="password"
              placeholder="******"
              {...register("password", { required: "Password is required." })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <button className="btn btn-sm w-full mt-3" type="submit">
            Login
          </button>
        </form>
        <p>
          New to Resell BD?{" "}
          <Link className="text-blue-400" to="/signup">
            Signup
          </Link>
        </p>
        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mx-auto"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt=""
            className="w-5 "
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
