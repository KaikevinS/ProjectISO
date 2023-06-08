import React, { useState } from "react";
import CompanyProfileForm from "./CompanyProfileForm";
import EmployeeStatus from "./EmployeeStatus";

const CompanyPage = () => {
  const [active, setActive] = useState(0);

  const SideItemList = [
    { title: "Detail Perusahaan", component: <CompanyProfileForm /> },
    {
      title: "Struktur Organisasi",
      component: <div>Organization Structure</div>,
    },
    {
      title: "Level Pekerjaan",
      component: <div>Job Level</div>,
    },
    {
      title: "Posisi Pekerjaan",
      component: <div>Job Position</div>,
    },
    {
      title: "Status Karyawan",
      component: <EmployeeStatus />,
    },
  ];

  return (
    <div className="mb-20 bg-white rounded-xl shadow-[0px_1px_16px_rgba(0,0,0,0.16)]">
      <div className="flex divide-x-[1px]">
        <div className="px-[60px] py-10 flex flex-col gap-5 pr-20">
          {SideItemList.map((item, index) => {
            return (
              <SideItem key={index} isActive={active === index} onClick={() => setActive(index)}>
                {item.title}
              </SideItem>
            );
          })}
        </div>
        <div className="flex-1 min-w-0 px-[60px] py-10">{SideItemList[active].component}</div>
      </div>
    </div>
  );
};

const SideItem = ({ children, isActive = false, onClick }) => {
  return (
    <span className={`font-medium text-sm cursor-pointer ${isActive ? "text-red-main" : "text-gray-disabledText"} hover:text-red-main`} onClick={onClick}>
      {children}
    </span>
  );
};

export default CompanyPage;
