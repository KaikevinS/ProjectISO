import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../../Utils/Common";
// import { Select, Option } from "@material-tailwind/react";

function EditEmployment({ id }) {
  const [datalist, setData] = useState([]);
  const [department, setDepartment] = useState("0");
  const [jobLevel, setJobLovel] = useState("0");
  const [jobPosition, setJobPosition] = useState("0");
  const [status, setStatus] = useState("0");
  const [joinDate, setJoinDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [kode, setKode] = useState("");

  useEffect(() => {
    console.log(getToken());
    axios
      .get(`https://people.api.zainzo.com/api/admin/employment/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        console.log(res.data[0][0]);
        setData(res.data[0][0]);
        setDepartment(res.data[0][0].department_id);
        setKode(res.data[0][0].employee_relation.employee_kode);
        setJobPosition(res.data[0][0].job_position_id);
        setJobLovel(res.data[0][0].job_level_id);
        setStatus(res.data[0][0].job_status_id);
        setJoinDate(res.data[0][0].employment_joindate);
        setEndDate(res.data[0][0].employment_enddate);
      });
  }, [id]);

  const data = {
    department_id: Number(department),
    employee_kode: kode,
    job_position_id: Number(jobPosition),
    job_level_id: Number(jobLevel),
    job_status_id: Number(status),
    employment_joindate: joinDate,
    employment_enddate: endDate,
  };

  const handleSave = () => {
    fetch(`https://people.api.zainzo.com/api/admin/update/employment/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // console.log(response.status);
        if (response.status >= 400) {
          alert("Isi Data anda dengan lengkap!");
        } else {
          alert("Data Berhasil Diubah!");
          navigate("/employees");
        }
      })
      .catch((error) => {
        // console.log(error.message)
      });
  };
  // console.log(datalist)
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-12 py-4 flex flex-col w-auto">
        <div className="h-auto">
          <h1 className="text-lg font-bold">Employment</h1>
          <p className="text-gray-disabledText mb-8 text-sm">Isi semua informasi pribadi karyawan</p>
          <div className="grid grid-cols-2 gap-y-10 text-sm w-full">
            {/* <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Company ID</span>
              <input
                type={"text"}
                className="outline-none col-span-2 mb-2"
                placeholder="Masukkan Company ID"
                disabled
              />
            </label> */}
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Employee ID</span>
              <input type={"text"} className="outline-none col-span-2 mb-2" placeholder="Masukkan ID" value={kode} onChange={(e) => setKode(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Department</span>
              <select className="outline-none col-span-2 mb-2 bg-white" value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value={0}>Pilih Jabatan</option>
                <option value={1}>Owner</option>
                <option value={2}>Director</option>
                <option value={3}>HRD Manager</option>
                <option value={4}>HRD Staff</option>
                <option value={5}>Finance Manger</option>
                <option value={6}>Other</option>
              </select>
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Job Position</span>
              <select className="outline-none col-span-2 mb-2 bg-white" value={jobPosition} onChange={(e) => setJobPosition(e.target.value)}>
                <option value={0}>Pilih Job Position</option>
                <option value={1}>CEO</option>
                <option value={2}>Manager HRD / GA</option>
                <option value={3}>Supervisor HRD / GA</option>
                <option value={4}>Staff HRD</option>
                <option value={5}>Staff GA</option>
                <option value={6}>Manager finance & accounting</option>
                <option value={7}>Manager Accounting</option>
                {/* <option value={8}>Manager Accounting</option> */}
                <option value={8}>Supervisor Accounting</option>
                <option value={9}>Manager Finance</option>
                <option value={10}>Staff Finance</option>
                <option value={11}>Manager sales & marketing</option>
                <option value={12}>Supervisor sales & marketing</option>
                <option value={13}>Staff sales</option>
                <option value={14}>Staff Marketing</option>
                <option value={15}>Manager IT</option>
                <option value={16}>Supervisor IT</option>
                <option value={17}>Staff IT</option>
              </select>
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
              <span className="text-gray-disabledText">Job Level</span>
              <select className="outline-none col-span-2 mb-2 bg-white" value={jobLevel} onChange={(e) => setJobLovel(e.target.value)}>
                <option value={0}>Pilih Job Position</option>
                <option value={1}>CEO</option>
                <option value={2}>Manager</option>
                <option value={3}>Supervisor</option>
                <option value={4}>Staff</option>
              </select>
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
              <span className="text-gray-disabledText">Status</span>
              <select className="outline-none col-span-2 mb-2 bg-white" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value={0}>Pilih Status</option>
                <option value={1}>Permanent</option>
                <option value={2}>Contract</option>
                <option value={3}>Probation</option>
              </select>
              {/* <div className="flex w-64 gap-6">
                <Select
                  variant="static"
                  className="flex w-64 gap-6 justify-end outline-none col-span-2 mb-2 bg-white"
                >
                  <Option className="hover:text-[#D10234]">
                    Material Tailwind HTML
                  </Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div> */}
            </label>
            <label></label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
              <span className="text-gray-disabledText">Join Date</span>
              <input type={"date"} className="outline-none col-span-2 mb-2" value={joinDate} onChange={(e) => setJoinDate(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition  }`}>
              <span className="text-gray-disabledText">End Date</span>
              <input type={"date"} className="outline-none col-span-2 mb-2" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
          </div>
        </div>
      </div>

      <div className="my-4 flex justify-end pr-24 gap-2">
        <button className="w-24 h-[38px] border-[2px] border-[#717171] rounded-full text-sm text-[#717171]" onClick={() => navigate(`/employees`)}>
          Back
        </button>

        <button
          className="w-24 h-[38px] bg-redColor rounded-full text-sm text-white"
          onClick={() => {
            handleSave();
            console.log(datalist);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditEmployment;
