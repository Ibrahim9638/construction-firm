import React from "react";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen mb-4 ">
        <div className="card bg-base-100 w-[80%] shrink-0 shadow-2xl mx-auto">
          <form className="card-body h-[600px] justify-center">
            <h2 className="text-center text-4xl font-bold text-green-950 mb-3">
              Please Register
            </h2>
            <div className="form-control w-[60%] mx-auto">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-[60%] mx-auto">
              <label className="label">
                <span className="label-text ">PhotoUrl</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your PhotoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-[60%] mx-auto">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-[60%] mx-auto">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 w-[60%] mx-auto">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-lg text-center font-bold">
              Have you already an account Please{" "}
              <Link to="/login" className="text-blue-900 font-bold">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
