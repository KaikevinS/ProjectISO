import React from "react";
import { useNavigate } from "react-router-dom";
import Employee from "../Pages/Employee/Employee";

function ChildSideBar({ passingval2, passingData, setRef }) {
  let navigate = useNavigate();
  return (
    <div className={`absolute z-10 top-0 mt-20 ml-[90px] transition-all duration-200 ease-in bg-white w-40 h-full shadow-md p-4 ${!passingval2 ? "opacity-0 invisible translate-x-[-20px]" : "opacity-1 visible translate-x-0"}`} ref={setRef}>
      {passingData.map((val, i) => {
        return (
          <div key={i}>
            <h1
              className="mb-4 cursor-pointer"
              onClick={() => {
                navigate(val.path);
              }}
            >
              {val.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default ChildSideBar;
