import React, { useContext, useState } from "react";
import { DataContext, PageContext } from "../AddEmployee";
import IconAdd from "./IconAdd";
import { getToken } from "../../../Utils/Common";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

function AddInvite() {
  const [loading, setLoading] = useState(false);
  const { setPages } = useContext(PageContext);
  const { datalist, setDataList } = useContext(DataContext);
  // const { setLoading } = useContext(LoadingContext)
  const handleChange = (event) => {
    setDataList({
      ...datalist,
      [event.target.name]: event.target.value,
    });
    // console.log(datalist);
  };

  const data = {
    employee_fullname: datalist.employee_fullname,
    employe_photo: "",
    employee_nickname: datalist.employee_nickname,
    email: datalist.email,
    employee_phone_number: datalist.employee_phone_number,
    employee_birth_place: datalist.employee_birth_place,
    employee_dob: datalist.employee_dob,
    employee_gender: datalist.employee_gender,
    employee_maritual_status: datalist.employee_maritual_status,
    employee_blood: datalist.employee_blood,
    employee_religion: datalist.employee_religion,
    employee_id_exp: datalist.employee_id_exp,
    employee_id_type: datalist.employee_id_type,
    employee_id_number: datalist.employee_id_number,
    employee_id_address: datalist.employee_id_address,
    employee_residential_addr: datalist.employee_residential_addr,
    employee_portal_code: datalist.employee_portal_code,
    // personal diatas
    employment_department: Number(datalist.employment_department) == 0 ? null : Number(datalist.employment_department),
    employment_joblevel: Number(datalist.employment_joblevel) == 0 ? null : Number(datalist.employment_joblevel),
    employment_jobposition: Number(datalist.employment_jobposition) == 0 ? null : Number(datalist.employment_jobposition),
    employment_status: Number(datalist.employment_status) == 0 ? null : Number(datalist.employment_status),
    employment_joindate: datalist.employment_joindate,
    employment_enddate: datalist.employment_enddate,
    employee_kode: datalist.employee_kode,
    // employment diatas
    payroll_basic_salary: datalist.payroll_basic_salary,
    payroll_payment_schedule: 20,
    payroll_salary_type: datalist.payroll_salary_type,
    payroll_prorate: datalist.payroll_prorate,
    payroll_bank_name: datalist.payroll_bank_name,
    // payroll_payment_schedule: 300;
    payroll_account_number: datalist.payroll_account_number,
    payroll_account_name: datalist.payroll_account_name,
    payroll_npwp: datalist.payroll_npwp,
    payroll_tax_method: datalist.payroll_tax_method,
    payroll_ptkp_status: datalist.payroll_ptkp_status,
    payroll_tax_salary: datalist.payroll_tax_salary,
    // payroll diatas
    role_id: datalist.role_id == "Admin" ? 2 : 3,
    password: "aaaaaaaa",
  };

  const navigate = useNavigate();

  const handleAdd = () => {
    setLoading(true);
    fetch(`https://people.api.zainzo.com/api/auth/registerUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status >= 400) {
          alert("Isi Data anda dengan benar!");
          setPages(1);
        } else {
          setLoading(false);
          alert("Data Berhasil Disimpan!");
          navigate("/employees");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    // .finally(() => setLoading(false))
  };

  return (
    <div className="px-6 py-4 flex flex-col w-full">
      <IconAdd active={"invite"} done={3} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-bold">Undang karyawan untuk dapat mengakses Zainzo People</h1>
        <p className="text-gray-disabledText mb-8 text-sm text-center">
          Selangkah lagi Anda berhasil menambahkan data karyawan. Untuk melanjutkan prosesnya,
          <br></br>Anda bisa mengundang karyawan untuk mengakses Zainzo People.
        </p>
        <div className="w-64">
          <h1 className="text-sm font-bold">Hak Akses</h1>
          <select type="text" className="outline-none w-full p-2 text-sm my-2 h-10 rounded-xl border-2 border[#D1D1D1]" name={"role_id"} value={datalist.role_id} onChange={(event) => handleChange(event)}>
            <option value={""} disabled>
              Pilih Hak Akses Akun
            </option>
            <option value={"Admin"}>Admin</option>
            <option value={"Employee"}>Employee</option>
          </select>
          <p className="text-xs text-gray-disabledText">Undang untuk memberi mereka akses ke platform menggunakan fitur Employee Self Service. Anda dapat melakukannya nanti di halaman pengaturan</p>
          <button className="w-full h-10 rounded-full bg-redColor text-white text-sm mt-12" onClick={handleAdd}>
            Tambah Karyawan Baru
          </button>
          {loading ? (
            <div className="flex justify-center mt-8">
              <ReactLoading type={"spin"} color={"#D10234"} height={"10%"} width={"10%"} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddInvite;
