import React, { useEffect, useRef, useState } from "react";
import Hamburger from ".././Assets/hamburger.png";
import Zeinzo from ".././Assets/zainzo-people.png";
import Notifikasi from ".././Assets/notifikasi.png";
import Arrow from ".././Assets/arrow.png";
import { getUser, removeUserSession } from "../Utils/Common";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { getToken } from "../Utils/Common";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [openSide, setOpenSide] = useState(true);
  const profileRef = useRef();
  const navigate = useNavigate();
  const user = getUser() ? getUser() : "";
  const location = useLocation();

  const checkLocation = () => {
    const navbarShowLoc = ["/dashboard", "/employees", `/employee-detail`, "/add-employee"];
    let correctLoc = "";
    for (let index = 0; index < navbarShowLoc.length; index++) {
      if (location.pathname === navbarShowLoc[index]) {
        correctLoc = navbarShowLoc[index];
      }
    }
    return correctLoc;
  };

  const handleClick = () => {
    return open ? setOpen(false) : setOpen(true);
  };

  const handleClickSide = () => {
    return openSide ? setOpenSide(false) : setOpenSide(true);
  };

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!profileRef.current.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, []);

  const handleLogout = () => {
    removeUserSession();
    navigate("/");
  };

  return (
    <div className="">
      {checkLocation() && (
        // <div className="sticky top-0 z-10 h-20 w-full bg-white shadow-md flex items-center justify-between p-8">
        <div>
          <div className="sticky top-0 z-10 h-20 bg-white shadow-md flex items-center justify-between p-8">
            <div className="flex items-center gap-10">
              {/* <img src={Hamburger} className="w-6" /> */}
              <button className="w-6 h-6 bg-cover bg-center bg-no-repeat outline-none" style={{ backgroundImage: `url(${Hamburger})` }} onClick={() => handleClickSide()} />
              <input type="text" className="bg-custom outline-none rounded-full text-sm p-3 w-48 h-10" placeholder="Search employee" />
            </div>
            <img
              src={Zeinzo}
              className="w-28 cursor-pointer"
              alt="zainzo"
              onClick={() => {
                navigate("/dashboard");
              }}
            />
            <div className="flex items-center">
              <div className="flex justify-center">
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                  {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Red</span> */}
                </label>
              </div>
              <div className="flex items-center gap-9">
                <div className="flex items-center gap-4">
                  <img src={Notifikasi} className="w-8" />
                  <img src={Arrow} className="w-8" />
                </div>
                <div className="flex items-center gap-3" ref={profileRef}>
                  <p className="text-md text-custom">{user.employee_nickname ? user.employee_nickname : "nama"}</p>
                  <div className="cursor-pointer" onClick={() => handleClick()}>
                    {user.employee_photo ? <div className="w-8 h-8 rounded-full bg-custom2">{user.employee_photo}</div> : <div className="w-8 h-8 rounded-full bg-custom2" />}
                  </div>
                  <div className={`absolute z-10 shadow-md top-24 right-3 bg-white w-40 rounded-3xl p-4 transition-all duration-200 ease-in ${!open ? "opacity-0 invisible translate-y-[-20px]" : "opacity-1 visible translate-y-0"}`}>
                    <ul className="text-custom flex flex-col justify-center gap-2">
                      <li>Account</li>
                      <li>Support</li>
                      <hr></hr>
                      <li className="cursor-pointer" onClick={handleLogout}>
                        Sign Out
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${!openSide ? "-translate-x-36" : ""} duration-200 `}>
            {/* <Sidebar setRef={profileRef} /> */}
            {openSide && <Sidebar open={openSide} setRef={profileRef} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
