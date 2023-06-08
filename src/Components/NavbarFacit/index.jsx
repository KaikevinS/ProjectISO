import React, { useEffect, useState } from "react";
import zainzoRedLogo from "../../Assets/facitIcons/zainzo-people.svg";

import LightIcon from "../../Assets/facitIcons/light-mode.svg";
import FullscreenIcon from "../../Assets/facitIcons/fullscreen.svg";
import LanguageIcon from "../../Assets/facitIcons/change-language.svg";
import QuickMenuIcon from "../../Assets/facitIcons/quick-menu.svg";
import notificationIcon from "../../Assets/facitIcons/notification.svg";
import PersonDummyImage from "../../Assets/facitIcons/user-photo.svg";
import DarkIcon from "../../assetsfacit/svg/DarkIcon";
import MenuOpenIcon from "../../assetsfacit/svg/MenuOpenIcon";
import LastPageIcon from "../../assetsfacit/svg/LastPageIcon";
import MenuIcon from "../../assetsfacit/svg/MenuIcon";
import { getToken, getUser, removeUserSession } from "../../Utils/Common";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarFacit = ({ onMenuLeftButtonClicked, onMenuRightButtonClicked }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [myAccountOpen, setMyAccountOpen] = useState(false);
  const location = useLocation();
  const user = getUser() ? getUser() : "";
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserSession();
    navigate("/login");
  };

  const getRole = (idRole) => {
    let role = "";
    switch (idRole) {
      case "2":
        role = "Admin";
        break;
      case "3":
        role = "User";
        break;
      default:
        role = "none";
        break;
    }
    return role;
  };

  const ShowNavbar = () => {
    if (!getToken() || location.pathname === "/onboarding") {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (mobileOpen) {
      window.document.body.classList.add("overflow-hidden", "lg:overflow-auto");
      return;
    }

    window.document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
  }, [mobileOpen]);

  const toggleDarkMode = () => {
    const darkModeKey = "isDarkMode";
    const root = window.document.documentElement;
    const isDarkMode = localStorage.getItem(darkModeKey);

    if (isDarkMode && isDarkMode === "true") {
      root.classList.remove("dark");
      localStorage.setItem(darkModeKey, false);
      return;
    }

    root.classList.add("dark");
    localStorage.setItem(darkModeKey, true);
  };

  const handleMenuLeftButtonClicked = () => {
    if (onMenuLeftButtonClicked) onMenuLeftButtonClicked();
  };

  const handleMenuRightButtonClicked = () => {
    if (onMenuRightButtonClicked) onMenuRightButtonClicked();

    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {ShowNavbar() && (
        <div className="grid grid-flow-row lg:sticky top-0 left-0 right-0 z-50">
          <nav
            className={`z-[50] fixed lg:sticky mt-4 top-0 left-0 right-0 mb-4 lg:mb-4 lg:p-3 flex flex-col lg:flex-row items-center backdrop-blur-sm lg:rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)] bg-white/50 dark:bg-dark-1/50 ${
              !getToken() && location.pathname === "/onboarding" ? "hidden" : "flex"
            }`}
          >
            <div className="lg:hidden w-full bg-white p-4 flex items-center justify-around">
              <div>
                <Button2 onClick={handleMenuLeftButtonClicked}>
                  <LastPageIcon className="w-6 h-6 text-black" />
                </Button2>
              </div>
              <div className={`self-center ml-auto`}>
                <img src={zainzoRedLogo} alt="logo" />
              </div>
              <div className="ml-auto" onClick={handleMenuRightButtonClicked}>
                <Button2 className={`${mobileOpen ? "hover:bg-purple-600 text-purple-600 hover:text-neutral-1" : "text-black"}`}>
                  {!mobileOpen && <MenuOpenIcon className="w-6 h-6" />}
                  {mobileOpen && <MenuIcon className="w-6 h-6" />}
                </Button2>
              </div>
            </div>
            <div className={`max-lg:hidden`}>
              <img src={zainzoRedLogo} alt="logo" />
            </div>
            <div className={`p-4 lg:p-0 lg:ml-auto lg:flex flex-col gap-4 lg:flex-row self-start lg:items-center ${mobileOpen ? "flex" : "hidden"}`}>
              <div className="flex items-center gap-2 mr-2">
                <Button onClick={toggleDarkMode} description={"Dark / Light Mode"}>
                  <img src={LightIcon} alt="light mode" className="w-5 h-5 dark:hidden" />
                  <DarkIcon className="w-5 h-5 text-[rgba(77,105,250,1)] hidden dark:block" />
                </Button>
                <Button description={"Fullscreen"}>
                  <img src={FullscreenIcon} alt="fullscreen" />
                </Button>
                {/* <Button description={"Change Language"}>
                  <img src={LanguageIcon} alt="language" />
                </Button> */}
                <Button description={"Quick Menu"}>
                  <img src={QuickMenuIcon} alt="quick menu" />
                </Button>
                <Button description={"Notification"}>
                  <img src={notificationIcon} alt="Notification" />
                </Button>
              </div>
              <ProfileBar
                user={user}
                role={getRole(user.role_id ? user.role_id : "1")}
                onClick={() => {
                  setMyAccountOpen(!myAccountOpen);
                }}
              />
            </div>
            <div className={`${mobileOpen ? "" : "hidden"} lg:hidden bg-black/20 h-screen w-full`}></div>
          </nav>
          <div
            className={`w-fit bg-white items-center z-50 backdrop-blur-sm lg:rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)] absolute  place-self-end grid text-left translate-y-40 text-sm text-[#717171] divide-y ${
              myAccountOpen ? "lg:block hidden" : "hidden"
            }`}
          >
            <div className="gap-3 grid py-5 gap-y-2">
              <div className="cursor-pointer px-6">My Account</div>
              <div className="cursor-pointer px-6">Account Setting</div>
              <div className="cursor-pointer px-6">Need Support?</div>
            </div>
            <div className="px-6 pb-4 pt-3 cursor-pointer hover:bg-neutral-1 rounded-b-lg" onClick={() => handleLogout()}>
              Sign Out
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProfileBar = ({ user, role, onClick }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      {/* <div className="flex flex-col items-end">
        <span className="text-[#808191] text-sm font-semibold dark:text-white">{user.employee_nickname ? user.employee_nickname : "User Name"}</span>
        <span className="text-xs text-[#6d767e] opacity-70">{role}</span>
      </div> */}
      <div className="relative w-7 aspect-square">
        {/* <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-main border-2 border-white text-white text-xxs text-center items-center">
          <span>1</span>
        </div> */}
        <div className="rounded-xl flex items-center justify-center overflow-hidden" onClick={onClick}>
          <div
            style={{
              backgroundImage: `url(${user.employee_photo ? "https://people.api.zainzo.com/public/storage/" + user.employee_photo : PersonDummyImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-7 aspect-square"
          ></div>
          {/* <img
            src={user.employee_photo ? user.employee_photo : PersonDummyImage}
            alt="Person"
            className="min-w-full min-h-full"
          /> */}
        </div>
        {/* <div className="absolute -bottom-1 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div> */}
      </div>
    </div>
  );
};

const Button = ({ children, description, onClick }) => {
  return (
    <button
      className={`relative w-10 h-10 flex items-center justify-center p-2 rounded-lg bg-white hover:opacity-100 hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer transition-all dark:bg-soft-dark text-xs ${
        description
          ? "before:pointer-events-none before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(datatip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
          : ""
      }`}
      datatip={description}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Button2 = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`rounded-xl p-2 bg-blue-1 hover:bg-neutral-1 transition-all ${className}`}>
      {children}
    </button>
  );
};

export default NavbarFacit;
