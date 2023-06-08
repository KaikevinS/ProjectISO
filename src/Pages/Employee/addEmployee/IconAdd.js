import React from "react";
import { act } from "react-dom/test-utils";
import DoneIcon from "../../../Assets/icon-addEmployee/done.png";

function IconAdd({ active, addDone1, addDone2, done = 0 }) {
  return (
    <>
      <div className="relative flex justify-center my-3">
        <div className="relative w-28 h-20 flex items-center flex-col gap-1 z-10">
          <div className={`w-12 h-12 ${active == "personal" || done >= 1 ? "bg-redColor text-white" : "bg-white border-2 border-[#D10234] text-gray-500"} rounded-full flex items-center justify-center`}>
            {/* {addDone1 == 1 ? <h1>1</h1> : <img src={DoneIcon} className="w-5" />} */}
            {done >= 1 ? <img src={DoneIcon} className="w-5" /> : <h1>1</h1>}
          </div>
          <p className={`text-sm ${active == "personal" || done >= 1 ? "text-redColor" : "text-gray-500"}`}>Data Pribadi</p>
        </div>
        <div className="w-28 flex items-center flex-col gap-1 z-10">
          <div
            className={`w-12 h-12 ${active == "employee" || done >= 2 ? "bg-redColor text-white" : active == "personal" ? "bg-white border-2 border-gray-500 text-gray-500" : "bg-white border-2 border-[#D10234] text-gray-500"
              } rounded-full flex items-center justify-center`}
          >
            {/* {addDone2 == 2 ? <h1>2</h1> : active == "personal" ? <h1>2</h1> : <img src={DoneIcon} className="w-5" />} */}
            {done >= 2 ? <img src={DoneIcon} className="w-5" /> : <h1>2</h1>}
          </div>
          {/* <p className="text-sm">Pekerjaan</p> */}
          <p className={`text-sm ${active == "employee" || done >= 2 ? "text-redColor" : "text-gray-500"}`}>Pekerjaan</p>
        </div>
        <div className="w-28 flex items-center flex-col gap-1 z-10">
          <div
            className={`w-12 h-12 
            ${active == "payroll"
            || done >= 3
                ? "bg-redColor text-white"
                :  "bg-white border-2 border-gray-500 text-gray-500"
              } rounded-full flex items-center justify-center`}
          >
            {/* {
              active == "invite" ?
                <img src={DoneIcon} className="w-5" />
                : active == "employee"
                  ? <h1>3</h1>
                  : active == "personal"
                    ? <h1>3</h1>
                    : <h1>3</h1>
            } */}
            {done >= 3 ? <img src={DoneIcon} className="w-5" /> : <h1>3</h1>}

          </div>
          {/* <p className="text-sm">Penggajian</p> */}
          <p className={`text-sm ${active == "payroll" || done >= 3 ? "text-redColor" : "text-gray-500"}`}>Penggajian</p>
        </div>
        {/* <div className="w-28 flex items-center flex-col gap-1 z-10">
          <div className={`w-12 h-12 ${active == "invite" ? "bg-redColor text-white" : "bg-white border-2 border-gray-500 text-gray-500"} rounded-full flex items-center justify-center`}>4</div>
          <p className="text-sm">Mengundang</p>
        </div> */}
        <div className="absolute w-full h-20 mt-[-15px] flex justify-center items-center gap-9">
          <span
            className={`sticky w-20 h-0 border-[1.6px] ${active == "personal" ? "border-gray-500" : active == "employee" ? "border-[#D10234]" : active == "payroll" ? "border-[#D10234]" : active == "invite" ? "border-[#D10234]" : ""}`}
          ></span>
          <span
            className={`sticky w-20 h-0 border-[1.6px] ${active == "personal" ? "border-gray-500" : active == "employee" ? "border-gray-500" : active == "payroll" ? "border-[#D10234]" : active == "invite" ? "border-[#D10234]" : ""}`}
          ></span>
          {/* <span
            className={`sticky w-20 h-0 border-[1.6px] ${active == "personal" ? "border-gray-500" : active == "employee" ? "border-gray-500" : active == "payroll" ? "border-gray-500" : active == "invite" ? "border-[#D10234]" : ""}`}
          ></span> */}
        </div>
      </div>
      {/* <div className="absolute w-full h-32 mt-[-60px] flex justify-center gap-9">
        <span
          className={`sticky w-20 h-0 border-[1.6px] ${
            active == "personal"
              ? "border-gray-500"
              : active == "employee"
              ? "border-[#D10234]"
              : active == "payroll"
              ? "border-[#D10234]"
              : active == "invite"
              ? "border-[#D10234]"
              : ''
          }`}
        ></span>
        <span className={`sticky w-20 h-0 border-[1.6px] ${
            active == "personal"
              ? "border-gray-500"
              : active == "employee"
              ? "border-gray-500"
              : active == "payroll"
              ? "border-[#D10234]"
              : active == "invite"
              ? "border-[#D10234]"
              : ''
          }`}></span>
        <span className={`sticky w-20 h-0 border-[1.6px] ${
            active == "personal"
              ? "border-gray-500"
              : active == "employee"
              ? "border-gray-500"
              : active == "payroll"
              ? "border-gray-500"
              : active == "invite"
              ? "border-[#D10234]"
              : ''
          }`}></span>
      </div> */}
    </>
  );
}

export default IconAdd;
