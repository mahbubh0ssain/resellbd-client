import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
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
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn btn-outline w-full mx-auto">
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
