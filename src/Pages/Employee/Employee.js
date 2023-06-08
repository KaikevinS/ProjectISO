import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../Utils/Common";
import UserPhoto from "../../Assets/userphoto.svg";
import Export from "../../Assets/export.svg";
import Add from "../../Assets/add.svg";
import FileEmployee from "../../Assets/file-employee-icon.svg";
import EditEmployee from "../../Assets/edit-employee-icon.svg";
import MoreEmployee from "../../Assets/more-employee-icon.svg";
import Pagination from "../../Components/Pagination";

function Employee() {
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  // useEffect(()=>{
  //   axios.get("https://people.api.zainzo.com/api/admin/department", {
  //     headers: {
  //       Authorization: `Bearer ${getToken()}`,
  //     },
  //   })
  //   // .then(res => console.log(res))
  // },[])

  useEffect(() => {
    axios
      .get("https://people.api.zainzo.com/api/admin/employee", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setDataList(res.data.employee);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);
  let navigate = useNavigate();

  // get Current Page

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dataList.slice(indexOfFirstData, indexOfLastData);

  // change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white px-6 overflow-auto flex scrollbar-hide text-[14px] flex-col mt-28 rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)]">
      {/* <div className="container h-screen overflow-auto flex flex-col"> */}
      <div className="w-auto justify-between flex mx-4">
        <h1 className="absolute mt-[-100px] text-[28px] font-base">Karyawan</h1>
        <div className="flex absolute mt-[-100px] right-12">
          <button
            className="text-[#4D69FA] rounded-lg bg-[#EDF0FF] px-4 flex flex-row items-center justify-items-center gap-x-2 text-sm mr-2 whitespace-nowrap hover:bg-[#4D69FA] hover:text-white group"
            onClick={() => {
              navigate("/employee-detail");
            }}
          >
            Export <img src={Export} alt="export-icon" className="group-hover:brightness-0 group-hover:grayscale group-hover:invert" />
          </button>
          <button
            className="bg-[#FEEEE9] rounded-lg text-[#D10234] text-sm px-4 py-2 flex flex-row items-center justify-items-center hover:bg-[#D10234] hover:text-white group"
            onClick={() => {
              navigate("/add-employee");
            }}
          >
            <img src={Add} alt="add-icon" className="group-hover:brightness-0 group-hover:grayscale group-hover:invert" />
            Tambah Karyawan
          </button>
        </div>
      </div>
      {/* <div className="bg-red-100"> */}
      {/* <div className="max-w-xl bg-red-100"> */}
      <table className="w-full overflow-auto border-collapse block p-4">
        <thead className="">
          <tr className="max-w-lg text-left text-[#3A3A3A] z-50">
            <th>
              <input type="checkbox" className="relative appearance-none w-3 h-3 border border-solid border-black rounded accent-blue-500" />
              {/* <input type="checkbox" className="w-3 h-3 border border-solid border-black rounded accent-blue-500" /> */}
            </th>
            <th className="font-semibold ml-4 w-6 px-5 py-4 whitespace-nowrap">Foto</th>
            <th className="font-semibold ml-4 w-60 px-5 py-4 whitespace-nowrap">Nama</th>
            <th className="font-semibold ml-4 w-36 px-5 py-4 whitespace-nowrap">Nomer Telepon</th>
            <th className="font-semibold ml-4 w-36 px-5 py-4 whitespace-nowrap">ID Karyawan</th>
            <th className="font-semibold ml-4 w-44 px-5 py-4 whitespace-nowrap">Jabatan</th>
            <th className="font-semibold ml-4 w-44 px-5 py-4 whitespace-nowrap">Divisi</th>
            <th className="px-6 py-4 whitespace-nowrap"></th>
            {/* <th className="font-semibold px-6 py-4 whitespace-nowrap ">Job Level</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Status</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Join Date</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">End Date</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Resign Date</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Email</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Birth Date</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Place Of Birth</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Age</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Address</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap">Phone Number</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Gender</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Marital Status</th>
                <th className="font-semibold px-6 py-4 whitespace-nowrap ">Religion</th> */}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => {
            return (
              <tr
                className="divide-y cursor-pointer truncate text-black-main hover:bg-[rgba(217,217,217,0.1)]"
                onClick={() => {
                  navigate(`/employee-detail/${item.employee_id}`);
                }}
                key={item.employee_id}
              >
                <td>
                  <input id={item.employee_id} type="checkbox" className="relative appearance-none w-3 h-3 border border-solid border-black rounded accent-blue-500" />
                </td>
                <td>
                  <div
                    style={{
                      backgroundImage: `url(${!item.employee_relation.employee_photo ? UserPhoto : "https://people.api.zainzo.com/public/storage/" + item.employee_relation.employee_photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="rounded-full mx-5 my-3 w-6 h-6"
                  ></div>
                </td>
                <td className="whitespace-nowrap px-5 py-3">{item.employee_relation.employee_fullname}</td>
                <td className="whitespace-nowrap px-5 py-3">{!item.employee_relation.employee_phone_number ? "-" : item.employee_relation.employee_phone_number}</td>
                <td className="whitespace-nowrap px-5 py-3">{item.employee_relation.employee_kode}</td>
                <td className="whitespace-nowrap px-5 py-3">{!item.jobposition_name ? "-" : item.jobposition_name.job_position_name}</td>
                <td className="whitespace-nowrap px-5 py-3">{!item.department_name ? "-" : item.department_name.department_name}</td>
                <td className="whitespace-nowrap py-3 flex gap-[13px]">
                  <a href="#" className="rounded-xl bg-gray-divider shadow-none flex justify-center items-center w-[34px] h-[34px] aspect-square hover:shadow-lg transition-all">
                    <img src={FileEmployee} />
                  </a>
                  <a href="#" className="rounded-xl bg-gray-divider shadow-none flex justify-center items-center w-[34px] h-[34px] aspect-square hover:shadow-lg transition-all">

                    <img src={EditEmployee} />
                  </a>
                  <a href="#" className="rounded-xl bg-gray-divider shadow-none flex justify-center items-center w-[34px] h-[34px] aspect-square hover:shadow-lg transition-all">

                    <img src={MoreEmployee} />
                  </a>
                </td>
                {/* <td className="whitespace-nowrap px-6 py-3">{!item.joblevel_name ? "-" : item.joblevel_name.job_level_name}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.jobstatus_name ? "-" : item.jobstatus_name.job_status_name}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employment_joindate ? "-" : item.employment_joindate}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employment_enddate ? "-" : item.employment_enddate}</td>
                    <td className="whitespace-nowrap px-6 py-3">-</td>
                    <td className="whitespace-nowrap px-6 py-3">{item.employee_relation.email}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employee_relation.employee_dob ? "-" : item.employee_relation.employee_dob}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employee_relation.employee_birth_place ? "-" : item.employee_relation.employee_birth_place}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employee_relation.employee_dob ? "-" : calculateAge(item.employee_relation.employee_dob)}</td>
                    <td className="whitespace-nowrap px-6 py-3 truncate">{!item.employee_relation.employee_residential_addr ? "-" : item.employee_relation.employee_residential_addr}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employee_relation.employee_phone_number ? "-" : item.employee_relation.employee_phone_number}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employee_relation.employee_gender ? "-" : item.employee_relation.employee_gender}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employee_relation.employee_maritual_status ? "-" : item.employee_relation.employee_maritual_status}</td>
                    <td className="whitespace-nowrap px-6 py-3">{!item.employee_relation.employee_religion ? "-" : item.employee_relation.employee_religion}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
      {/* </div> */}
      <div className={`flex sticky left-0 ${dataPerPage >= dataList.length && "hidden"}`}>
        <Pagination
          totalData={dataList.length}
          dataPerPage={dataPerPage}
          paginate={paginate}
          prev={() => {
            currentPage !== 1 && setCurrentPage(currentPage - 1);
          }}
          next={(pageNumbers) => {
            currentPage !== pageNumbers.length && setCurrentPage(currentPage + 1);
          }}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Employee;
