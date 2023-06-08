import React, { createContext, useState } from "react";
import AddPersonal from "./addEmployee/AddPersonal";
import AddEmployement from "./addEmployee/AddEmployment";
import AddPayroll from "./addEmployee/AddPayroll";
import AddInvite from "./addEmployee/AddInvite";

export const DataContext = createContext();
export const PageContext = createContext();
export const PermanentContext = createContext();

function AddEmployee() {
  const [pages, setPages] = useState(1);
  const [permanent, setPermanent] = useState(false);
  const [datalist, setDataList] = useState({
    employee_fullname: "",
    employee_nickname: "",
    email: "",
    employee_phone_number: "",
    employee_birth_place: "",
    employee_dob: "",
    employee_gender: "",
    employee_maritual_status: "",
    employee_blood: "",
    employee_religion: "",
    employee_id_exp: "",
    employee_id_type: "",
    employee_id_number: "",
    employee_id_address: "",
    employee_residential_addr: "",
    employee_portal_code: "",
    // personal diatas
    employment_department: 0,
    employment_joblevel: 0,
    employment_jobposition: 0,
    employment_status: 0,
    employment_joindate: "",
    employment_enddate: "",
    employee_kode: "",
    // employment diatas
    payroll_basic_salary: "",
    payroll_payment_schedule: "Kosong",
    payroll_salary_type: "",
    payroll_prorate: "",
    payroll_bank_name: "",
    payroll_account_number: "",
    payroll_account_name: "",
    payroll_npwp: "",
    payroll_tax_method: "",
    payroll_ptkp_status: "",
    payroll_tax_salary: "",
    // payroll diatas
    role_id: "",
    password: "aaaaaaaa",
  });

  // const handleNext = (page) => {
  //   if (page < 1) {
  //     setPages(1);
  //   } else if (page > 4) {
  //     setPages(4);
  //   } else {
  //     setPages(page);
  //   }
  // };

  return (
    // <div>
    //   <div className="py-10 px-10 bg-gray-main h-auto ml-24">
    //     <div className="container mx-auto h-full drop-shadow-md bg-white rounded-xl p-3 overflow-auto divide-x">
    //       {pages === 1 ? <AddPersonal setDone1={pages == 1 ? 1 : false} /> : pages === 2 ? <AddEmployement setDone2={pages == 2 ? 2 : false} /> : pages === 3 ? <AddPayroll setDone3={pages == 3 ? 3 : false} /> : <AddInvite />}
    //       <section className="my-8 flex gap-4 justify-end">
    //         <button className="w-24 h-8 border-2 border-gray-500 rounded-full text-sm text-gray-500" onClick={() => handleNext(pages - 1)}>
    //           Cancel
    //         </button>
    //         <button className="w-24 h-8 bg-redColor rounded-full text-sm text-white" onClick={() => handleNext(pages + 1)}>
    //           Next
    //         </button>
    //       </section>
    <PageContext.Provider value={{ pages, setPages }}>
      <DataContext.Provider value={{ datalist, setDataList }}>
        <PermanentContext.Provider value={{ permanent, setPermanent }}>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <div className="mx-auto max-h-min my-2 w-full bg-white shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)] rounded-xl p-3 overflow-auto divide-x">
              {pages === 1 ? (
                <AddPersonal setDone1={pages == 1 ? 1 : false} />
              ) : pages === 2 ? (
                <AddEmployement setDone2={pages == 2 ? 2 : false} />
              ) : pages === 3 ? (
                <AddPayroll setDone3={pages == 3 ? 3 : false} />
              ) : (
                <AddInvite />
              )}
              <section className="my-8 flex gap-4 justify-center"></section>
            </div>
        </PermanentContext.Provider>
      </DataContext.Provider>
    </PageContext.Provider>
  );
}

export default AddEmployee;
