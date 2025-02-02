import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useEffect } from "react";
const authenticatedroutes = ["/myprofile"];
const unauthenticateddroutes = ["/login", "/register"];
const Applayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      if (unauthenticateddroutes.includes(window.location.pathname)) {
        navigate("/myprofile");
      }
    } else {
      if (authenticatedroutes.includes(window.location.pathname)) {
        navigate("/login");
      }
    }
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default Applayout;
