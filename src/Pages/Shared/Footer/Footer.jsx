import React from "react";
import { GiSelfLove } from "react-icons/gi";
import logo from '../../../assets/Logo of Mallika Group.jpg';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#130f40] text-white p-10 ">
        <aside>
          <img className="w-[50px] h-[50px] rounded-full" src={logo} alt="" />
          <p>
            MA Zaher Limited.
            <br />
            Providing reliable tech since 1986
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Roads and Highways Department</a>
          <a className="link link-hover">Local Government Engineering Department</a>
          <a className="link link-hover">Public Works Department</a>
          <a className="link link-hover">EED</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-slate-950 text-base-content p-4">
        <aside className="flex text-white">
          <p>
            © {new Date().getFullYear()} -All right reserved, 
          </p>
          <p className="flex items-center">
            Design by <GiSelfLove className="text-red-900 mx-1 font-extrabold"/>  Ibrahim Hossain
          </p>

        </aside>
      </footer>
    </div>
  );
};

export default Footer;
