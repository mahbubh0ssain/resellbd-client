import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Addproducts = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const formData = new FormData();
  const [date, setDate] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //get category
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category");
      const data = res.json();
      return data;
    },
  });

  const imageHostingKey = process.env.REACT_APP_imgbb_key;

  const getCurrentDate = () => {
    const date = new Date().getDate(); //current date
    const month = new Date().getMonth() + 1; //current month
    const year = new Date().getFullYear(); //current yea
    return date + "/" + month + "/" + year;
  };

  const handleAddProduct = (data) => {
    const image = data.image[0];
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostingKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            name: data.name,
            img: imgData.data.url,
            categoryId: data.category,
            originalPrice: data.orgPrice,
            price: data.resellPrice,
            yearOfPurchase: data.purchase,
            description: data.description,
            condition: data.condition,
            yearsUse: data.yearsUse,
            location: data.location,
            contact: data.contact,
            postedAt: date,
            sellerName: user.displayName,
            sellerEmail: user.email,
            status: "unsold",
            verified: false,
          };
          fetch("http://localhost:5000/add-product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product added successfully");
                navigate("/dashboard/my-products");
              } else {
                toast.error("Something went wrong");
              }
            });
        }
      });
  };
  return (
    <div className="p-5 max-w-[576px] mx-auto shadow rounded-lg ">
      <p className="text-2xl text-center">Add Product</p>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="form-control w-full">
          <label>Name</label>
          <input
            type="text"
            placeholder="ABC"
            {...register("name", { required: "Email is required." })}
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-red-600" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Image</label>
          <input
            type="file"
            placeholder="ABC"
            {...register("image", { required: "Image is required." })}
            className="file-input file-input-bordered w-full "
          />
          {errors.image && (
            <p className="text-red-600" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Category</label>
          <select
            type="text"
            className="input input-bordered w-full"
            {...register("category", { required: "Category is required." })}
          >
            {data.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-600" role="alert">
              {errors.category?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Original price</label>
          <input
            type="text"
            placeholder="$123"
            {...register("orgPrice", {
              required: "Original rice is required.",
            })}
            className="input input-bordered w-full"
          />
          {errors.orgPrice && (
            <p className="text-red-600" role="alert">
              {errors.orgPrice?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Resell price</label>
          <input
            type="text"
            placeholder="$100"
            {...register("resellPrice", {
              required: "Resell rice is required.",
            })}
            className="input input-bordered w-full"
          />
          {errors.resellPrice && (
            <p className="text-red-600" role="alert">
              {errors.resellPrice?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Year of purchase</label>
          <input
            type="text"
            {...register("purchase", { required: "Purchase is required." })}
            className="input input-bordered w-full"
          />
          {errors.purchase && (
            <p className="text-red-600" role="alert">
              {errors.purchase?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Years use</label>
          <input
            type="text"
            placeholder="1 year"
            {...register("yearsUse", { required: "Years use is required." })}
            className="input input-bordered w-full"
          />
          {errors.yearsUse && (
            <p className="text-red-600" role="alert">
              {errors.yearsUse?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Description</label>
          <textarea
            type="textarea"
            {...register("description", {
              required: "Description is required.",
            })}
            className="input input-bordered w-full"
          />
          {errors.purchase && (
            <p className="text-red-600" role="alert">
              {errors.purchase?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Condition</label>
          <select
            type="text"
            className="input input-bordered w-full"
            {...register("condition", { required: "Condition is required." })}
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
          {errors.condition && (
            <p className="text-red-600" role="alert">
              {errors.condition?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Location</label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("location", { required: "Location is required." })}
          />
          {errors.location && (
            <p className="text-red-600" role="alert">
              {errors.location?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full">
          <label>Contact</label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("contact", { required: "Contact is required." })}
          />
          {errors.contact && (
            <p className="text-red-600" role="alert">
              {errors.contact?.message}
            </p>
          )}
        </div>

        <button
          onClick={() => setDate(getCurrentDate)}
          className="btn btn-sm w-full mt-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addproducts;
