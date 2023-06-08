import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { getToken } from "./../../../Utils/Common";

function DeleteAttendance({ setShowModalDelete, idDelete }) {
  const handleDelete = (id) => {
    // axios
    //   .post(`https://people.api.zainzo.com/api/admin/attendance/delete/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${getToken()}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     toast.success("Berhasil Dihapus");
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     // toast.error(err.message);
    //   });
    // console.log(getToken());
    fetch(`https://people.api.zainzo.com/api/admin/attendance/delete/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((response) => {
        console.log(response.status);
        toast.success("Berhasil Dihapus");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setShowModalDelete(false);
  };

  return (
    <>
      <div className=" backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[6000] outline-none focus:outline-none pt-56">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="top-[-300px] border-0 p-6 rounded-3xl shadow-lg gap-4 relative flex flex-col w-auto bg-white outline-none focus:outline-none">
            {/*header*/}
            <p className="text-[16px] font-extrabold">Hapus Kehadiran</p>
            <p className="text-[14px]">Menghapus kehadiran akan mengatur ulang absensi karyawan</p>
            <div className="flex justify-end gap-4 mt-2">
              <button className="w-[90px] h-[40px] flex items-center rounded-xl justify-center text-redColor bg-[#F4F4F4]" onClick={() => setShowModalDelete(false)}>
                Batal
              </button>
              <button
                className="w-[90px] h-[40px] flex items-center rounded-xl justify-center text-white bg-[#D10234]"
                onClick={() => {
                  handleDelete(idDelete);
                }}
              >
                Simpan
              </button>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[5000] bg-black"></div>
    </>
  );
}

export default DeleteAttendance;
