import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../../Utils/Common";
import EditEmployment from "../editEmployee/EditEmployment";

function Employment({ id }) {
  const [datalist, setData] = useState([]);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    // console.log(id);
    axios
      .get(`https://people.api.zainzo.com/api/admin/employment/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => setData(res.data[0][0]))
      .catch((err) => console.log(err.message));
  }, [id]);
  // console.log(datalist);
  return (
    <>
      {edit ? (
        <div className="px-12 py-4 flex flex-col w-auto">
          <div className="h-auto">
            <h1 className="text-lg font-bold mb-5 text-black-main">Employment</h1>
            <div className="grid grid-cols-2 gap-y-10 text-sm w-full">
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Company ID</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{datalist.company_id}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Employee ID</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{!datalist.employee_relation ? "-" : datalist.employee_relation.employee_kode}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Department</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{!datalist.department_name ? "-" : datalist.department_name.department_name}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Job Position</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{!datalist.jobposition_name ? "-" : datalist.jobposition_name.job_position_name}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
                <span className="text-gray-disabledText">Job Level</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{!datalist.joblevel_name ? "-" : datalist.joblevel_name.job_level_name}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
                <span className="text-gray-disabledText">Status</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{!datalist.jobstatus_name ? "-" : datalist.jobstatus_name.job_status_name}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
                <span className="text-gray-disabledText">Join Date</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{!datalist.employment_joindate ? "-" : datalist.employment_joindate}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
                <span className="text-gray-disabledText">End Date</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{!datalist.employment_enddate ? "-" : datalist.employment_enddate}</p>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <EditEmployment id={id} />
      )}
      <div className="flex justify-end pr-24">
        {edit ? (
          <button className="w-24 h-[38px] border-[2px] border-[#717171] rounded-full text-sm text-[#717171]" onClick={() => setEdit(false)}>
            Edit
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Employment;
