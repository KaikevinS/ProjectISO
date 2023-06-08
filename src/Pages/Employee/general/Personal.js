import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { getToken } from "../../../Utils/Common";
import { SelectImgContext } from "../DetailEmployee";
import EditPersonal from "../editEmployee/EditPersonal";

function Personal({ id, editImg }) {
  const [datalist, setData] = useState([]);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    // console.log(selectImg)
    axios
      .get(`https://people.api.zainzo.com/api/admin/employee/personal/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => setData(res.data.data[0]))
      .catch((err) => console.log(err.message));
  }, [id]);
  // console.log(datalist);
  return (
    <>
      {edit ? (
        <div className="px-12 py-4 flex flex-col gap-x-24">
          <div className="h-auto">
            <h1 className="text-lg font-bold mb-5 text-black-main">Data Pribadi</h1>
            <div className="grid grid-cols-2 gap-y-10 text-sm">
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Nama Lengkap</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{datalist.employee_fullname}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition`}>
                <span className="text-gray-disabledText">Nama Panggilan</span>
                <p className="outline-none col-span-2 mb-2">{datalist.employee_nickname}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Email</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${!datalist.email ? "-" : datalist.email}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Nomor Telepon</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${datalist.employee_phone_number}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Tempat Lahir</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${!datalist.employee_birth_place ? "-" : datalist.employee_birth_place}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Tanggal Lahir</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${!datalist.employee_dob ? "-" : datalist.employee_dob}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Jenis Kelamin</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${datalist.employee_gender == null ? "-" : datalist.employee_gender}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Status Pernikahan</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${!datalist.employee_maritual_status ? "-" : datalist.employee_maritual_status}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Golongan Darah</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${!datalist.employee_blood ? "-" : datalist.employee_blood}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Agama</span>
                <p className="outline-none col-span-2 mb-2 text-black-main">{`${!datalist.employee_religion ? "-" : datalist.employee_religion}`}</p>
              </label>
            </div>
          </div>
          <div className="h-auto">
            <h1 className="text-base font-bold pt-8 pb-6">Identitas & Alamat</h1>
            <div className="grid grid-cols-2 gap-y-10 text-sm">
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Tipe Identitas</span>
                <p className="outline-none col-span-2 mb-2">{`${!datalist.employee_id_type ? "-" : datalist.employee_id_type}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Nomor Identitas</span>
                <p className="outline-none col-span-2 mb-2">{`${!datalist.employee_id_number ? "-" : datalist.employee_id_number}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">ID Expiration Date</span>
                <p className="outline-none col-span-2 mb-2">{!datalist.employee_exp_date ? "-" : datalist.employee_exp_date}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Kode Pos</span>
                <p className="outline-none col-span-2 mb-2">{`${!datalist.employee_portal_code ? "-" : datalist.employee_portal_code}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Alamat KTP</span>
                <p className="outline-none col-span-2 mb-2">{`${!datalist.employee_id_address ? "-" : datalist.employee_id_address}`}</p>
              </label>
              <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
                <span className="text-gray-disabledText">Alamat Domisili</span>
                <p className="outline-none col-span-2 mb-2">{`${!datalist.employee_residential_addr ? "-" : datalist.employee_residential_addr}`}</p>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <EditPersonal id={id} />
      )}
      <div className="flex justify-end pr-24">
        {edit ? (
          <button
            className="w-24 h-[38px] border-[2px] border-[#717171] rounded-full text-sm text-[#717171]"
            onClick={() => {
              setEdit(false);
              editImg(true);
            }}
          >
            Edit
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Personal;
