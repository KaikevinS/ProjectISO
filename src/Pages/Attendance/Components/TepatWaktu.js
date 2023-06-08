import React, { useState, useEffect } from "react";
import { IoAddOutline, IoCloseSharp, IoSearch } from "react-icons/io5";
import axios from "axios";
import { getToken } from "../../../Utils/Common";

function TepatWaktu({ setShowModal }) {
  const [TepatWaktuList, setTepatWaktuList] = useState([]);

  useEffect(() => {
    axios
      .get("https://people.api.zainzo.com/api/admin/attendance/get/now/tepat_waktu", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setTepatWaktuList(res.data.attendance);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <div className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[6000] outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="top-[-45px] h-96 border-0 rounded-3xl shadow-lg relative flex flex-col w-[40rem] bg-white outline-none focus:outline-none">
            {/* <div className="top-0 h-96 border-0 rounded-3xl shadow-lg relative flex flex-col w-[40rem] bg-white outline-none focus:outline-none"> */}
            {/*header*/}
            <div className="flex justify-center">
              <div className="bg-white mt-7 mx-5 rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.2)] w-full h-[58px] flex justify-between items-center p-4">
                <p>Tepat Waktu - 20 Feb 2023</p>
                <IoCloseSharp size="25px" onClick={() => setShowModal(false)} className=" cursor-pointer" />
              </div>
            </div>
            <div className="flex mt-10 mx-5 rounded-xl px-3 bg-white w-72 h-[60px] items-center gap-4 border-[1px] border-[#D1D1D1]">
              <IoSearch color="#717171" size={"20px"} />
              <input type={"text"} placeholder="Pencarian" className=" outline-none w-full" />
            </div>
            <div className="scrollbar-hide overflow-auto">
              <table className="flex flex-col mx-6">
                <thead className="border-b text-left">
                  <tr>
                    <th className="font-semibold w-56 py-4">Nama Karyawan</th>
                    <th className="font-semibold w-32 py-4">Id Karyawan</th>
                    <th className="font-semibold py-4">Shift</th>
                  </tr>
                </thead>
                <tbody className="border-b">
                  {TepatWaktuList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="w-56 py-4">{item.get_employee && item.get_employee.employee_fullname}</td>
                        <td className="w-32 py-4">{item.get_employee && item.get_employee.employee_kode}</td>
                        <td className="py-4">{item.attendance_shift}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[5000] bg-black"></div>
    </>
  );
}

export default TepatWaktu;
