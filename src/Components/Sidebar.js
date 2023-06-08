import React, { useState, useEffect, useRef } from "react";
import IconDashboard from ".././Assets/icon-sidebar/home-2.png";
import IconEmployee from ".././Assets/icon-sidebar/profile-2user.png";
import IconCalender from ".././Assets/icon-sidebar/calendar.png";
import IconCompany from ".././Assets/icon-sidebar/building.png";
import ChildSideBar from "./ChildSideBar";
import { useNavigate } from "react-router-dom";

const iconData = [
  {
    id: 0,
    iconTitle: IconDashboard,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 1,
    iconTitle: IconEmployee,
    title: "Organization",
  },
  {
    id: 2,
    iconTitle: IconCalender,
    title: "Calender",
  },
  {
    id: 3,
    iconTitle: IconCompany,
    title: "Company",
  },
];

function Sidebar({ open, setRef }) {
  const [side, setSide] = useState(false);
  const [data, setData] = useState([]);
  const profileRef = useRef();
  const navigate = useNavigate();

  const handleClickSide = (val) => {
    if (val.title === "Organization") {
      side ? setSide(false) : setSide(true);
      setData([
        { title: "Employee", path: "/employees" },
        { title: "Department", path: "" },
      ]);
    } else if (val.title === "Calender") {
      setSide(false);
      setData([]);
    } else if (val.title === "Company") {
      setSide(false);
      setData([]);
    } else if (val.title === "Dashboard") {
      setSide(false);
      setData([]);
    }
  };

  return (
    // <div className={`absolute z-10 bg-redColor w-24 min-h-screen`}>
    // <div className={`float-left mr-20 bg-redColor min-h-screen`}>
    // {/* {open && ( */}
    // <div className={`fixed z-10 bg-redColor w-[90px] min-h-screen`}>
    <div className={`float-left w-[90px] bg-redColor  min-h-screen`}>
      <div>
        {iconData.map((val) => {
          return (
            <div
              key={val.id}
              className="flex flex-col items-center justify-center p-4 cursor-pointer"
              onClick={() => {
                val.path ? navigate(val.path) : handleClickSide(val);
              }}
            >
              <img src={val.iconTitle} className="w-8 h-8" alt={val.title} />
              <p className="text-white text-[10px] cursor-pointer">{val.title}</p>
            </div>
          );
        })}
        <ChildSideBar passingval2={side} passingData={data} setRef={profileRef} />
      </div>
    </div>
    // )}
    // </div>
  );
}

export default Sidebar;
