import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-[#dff9fb] min-h-screen mb-4 ">
        <div className="card bg-base-100 w-[50%] shrink-0 shadow-2xl mx-auto">
          <form className="card-body h-[550px] justify-center">
          <h2 className="text-center text-3xl font-bold text-green-950 mb-3">Login to your Account</h2>
            <div className="form-control w-[70%] mx-auto">
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
            <div className="form-control w-[70%] mx-auto">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="Password"
                placeholder="Enter your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 w-[70%] mx-auto">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-lg text-center font-bold">Are you a New Person ? Please <Link to='/register' className="text-blue-500 font-bold hover:underline">Register Here!</Link></p>
          </form>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
