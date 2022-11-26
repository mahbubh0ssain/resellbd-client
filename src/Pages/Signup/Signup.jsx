import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUser(data.name)
          .then(() => {})
          .catch(() => {});
        const userInfo = {
          name: data.name,
          email: data.email,
          role: data.role,
        };

        fetch("http://localhost:5000/createUser", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((info) => {
            console.log(info);
            if (info.data.acknowledged) {
              navigate("/");
              toast.success(`Welcome ${data.name} to Resell BD`);
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center my-5 ">
      <div className="bg-amber-100 p-12 rounded-xl">
        <h2 className="text-center text-4xl mb-6">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label>Name</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Name is required." })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
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

          <div className="form-control w-full">
            <label>Options</label>
            <select
              type="text"
              className="input input-bordered w-full"
              {...register("role")}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <button className="btn btn-sm w-full mt-3" type="submit">
            Signup
          </button>
        </form>
        <p>
          Already have an account?
          <Link className="text-blue-400" to="/login">
            Login
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

  return <div></div>;
};

export default Signup;
