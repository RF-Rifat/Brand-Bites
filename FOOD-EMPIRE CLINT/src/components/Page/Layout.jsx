import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import AOS from 'aos';
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";


const Layout = () => {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="sticky w-full px-6 lg:px-20">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </>
  );
};

export default Layout;
