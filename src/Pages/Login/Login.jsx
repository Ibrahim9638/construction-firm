import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen mb-4 ">
        <div className="card bg-base-100 w-[80%] shrink-0 shadow-2xl mx-auto">
          
          <form className="card-body h-[500px] justify-center">
          <h2 className="text-center text-4xl font-bold text-green-950 mb-3">Please Login</h2>
            <div className="form-control w-[60%] mx-auto">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 w-[60%] mx-auto">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-lg text-center font-bold">Are you a New Person ? Please <Link to='/register' className="text-blue-900 font-bold">Register Here</Link></p>
          </form>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
