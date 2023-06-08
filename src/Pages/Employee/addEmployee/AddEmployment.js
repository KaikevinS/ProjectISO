import React, { useContext, useState } from "react";
import { DataContext, PageContext } from "../AddEmployee";
import IconAdd from "./IconAdd";

function AddEmployment({ setDone2 }) {
  const [isFocused, setIsFocused] = useState("");
  const { setPages } = useContext(PageContext);
  const { datalist, setDataList } = useContext(DataContext);
  const handleChange = (event) => {
    setDataList({
      ...datalist,
      [event.target.name]: event.target.value,
    });
    // console.log(datalist)
  };

  const handleNext = () => {
    if (datalist.employee_kode && datalist.employment_status && datalist.employment_joindate) {
      setPages(3);
    } else {
      alert("Data Harus Lengkap!");
    }
    console.log("data FIX", datalist);
  };

  return (
    <div className="px-6 py-4 flex flex-col w-full">
      <div className="h-full">
        <IconAdd active={"employee"} addDone2={setDone2} done={1} />
        <h1 className="text-lg font-bold">Pekerjaan</h1>
        <p className="text-gray-disabledText mb-8 text-sm">Isi semua informasi pribadi karyawan</p>
        <div className="grid grid-cols-2 gap-y-10 text-sm">
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "employeeid" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">
              ID Karyawan<span className="text-red-main">*</span>
            </span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="Masukkan ID"
              onFocus={() => setIsFocused("employeeid")}
              onBlur={() => setIsFocused("")}
              name="employee_kode"
              value={datalist.employee_kode}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition ${isFocused == "barcode" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Barcode</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2 bg-white"
              // value={"Margaret"}
              placeholder="-"
              onFocus={() => setIsFocused("barcode")}
              onBlur={() => setIsFocused("")}
              disabled
            />
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "employeestatus" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">
              Status Karyawan<span className="text-red-main">*</span>
            </span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2"
              name="employment_status"
              value={datalist.employment_status}
              onFocus={() => setIsFocused("employeestatus")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            >
              <option value={0} disabled>
                Pilih Status
              </option>
              <option value={1}>Permanent</option>
              <option value={2}>Contract</option>
              <option value={3}>Probation</option>
            </select>
          </label>
          <label></label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "join-date" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">
              Tanggal Gabung<span className="text-red-main">*</span>
            </span>
            <input
              type="date"
              className="outline-none col-span-2 mb-2"
              name="employment_joindate"
              value={datalist.employment_joindate}
              // placeholder="Tempat Lahir"
              onFocus={() => setIsFocused("join-date")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "end-date" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Tanggal Berakhir</span>
            <input
              type="date"
              className="outline-none col-span-2 mb-2"
              name="employment_enddate"
              value={datalist.employment_enddate}
              // placeholder="Tempat Lahir"
              onFocus={() => setIsFocused("end-date")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "branch" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Cabang</span>
            <select type="text" className="outline-none col-span-2 mb-2 bg-white invalid:text-gray-200" onFocus={() => setIsFocused("branch")} onBlur={() => setIsFocused("")}>
              <option value={0} disabled>
                Pilih branch
              </option>
            </select>
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "department" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Departemen</span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2 bg-white"
              onFocus={() => setIsFocused("department")}
              onBlur={() => setIsFocused("")}
              name={"employment_department"}
              value={datalist.employment_department}
              onChange={(event) => handleChange(event)}
            >
              <option value={0} disabled>
                Pilih Jabatan
              </option>
              <option value={1}>Owner</option>
              <option value={2}>Director</option>
              <option value={3}>HRD Manager</option>
              <option value={4}>HRD Staff</option>
              <option value={5}>Finance Manger</option>
              <option value={6}>Other</option>
            </select>
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "job-position" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Posisi Pekerjaan</span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2 bg-white"
              onFocus={() => setIsFocused("job-position")}
              onBlur={() => setIsFocused("")}
              name={"employment_jobposition"}
              value={datalist.employment_jobposition}
              onChange={(event) => handleChange(event)}
            >
              <option value={0} disabled>
                Pilih posisi
              </option>
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
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "job-level" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Level Pekerjaan</span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2 bg-white"
              onFocus={() => setIsFocused("job-level")}
              onBlur={() => setIsFocused("")}
              name={"employment_joblevel"}
              value={datalist.employment_joblevel}
              onChange={(event) => handleChange(event)}
            >
              <option value={0} disabled>
                Pilih Job Position
              </option>
              <option value={1}>CEO</option>
              <option value={2}>Manager</option>
              <option value={3}>Supervisor</option>
              <option value={4}>Staff</option>
            </select>
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "grade" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Grade</span>
            <select type="text" className="outline-none col-span-2 mb-2 bg-white invalid:text-gray-200" onFocus={() => setIsFocused("grade")} onBlur={() => setIsFocused("")}>
              <option disabled>Pilih</option>
            </select>
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "class" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Class</span>
            <select type="text" className="outline-none col-span-2 mb-2 bg-white" onFocus={() => setIsFocused("class")} onBlur={() => setIsFocused("")}>
              <option disabled>Pilih</option>
            </select>
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "schedule" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Schedule</span>
            <select type="text" className="outline-none col-span-2 mb-2 bg-white" onFocus={() => setIsFocused("schedule")} onBlur={() => setIsFocused("")}>
              <option disabled>Pilih</option>
            </select>
          </label>
          <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${isFocused == "approval" ? "border-red-500" : ""}`}>
            <span className="text-gray-disabledText">Approval Line</span>
            <select type="text" className="outline-none col-span-2 mb-2 bg-white" onFocus={() => setIsFocused("approval")} onBlur={() => setIsFocused("")}>
              <option disabled>Pilih</option>
            </select>
          </label>
        </div>
      </div>
      <section className="my-8 flex gap-4 justify-end">
        <button className="w-24 h-8 border-2 border-gray-500 rounded-full text-sm text-text-gray-custom hover:bg-gray-divider" onClick={() => setPages(1)}>
          Kembali
        </button>
        <button className="w-24 h-8 bg-[#FEEEE9] text-redColor hover:bg-redColor hover:text-[#FEEEE9] font-semibold rounded-full text-sm text-white" onClick={handleNext}>
          Lanjut
        </button>
      </section>
    </div>
  );
}

export default AddEmployment;
