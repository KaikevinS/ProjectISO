import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListDetailAttendance from "./Components/ListDetailAttendance";
import TrashIcon from "../../Assets/icon-attendance/trash-icon.svg";
import HelpIcon from "../../Assets/icon-attendance/help-icon.svg";
import ImportIcon from "../../Assets/icon-attendance/import-icon.svg";
import ExportIcon from "../../Assets/icon-attendance/export-icon.svg";
import CalendarIcon from "../../Assets/calendar.svg";
import { DatePicker } from "antd";
import moment from "moment";
import TepatWaktu from "./Components/TepatWaktu";
import DeleteAttendance from "./Components/DeleteAttendance";
import EditAttendance from "./Components/EditAttendance";
import axios from "axios";
import { getToken } from "../../Utils/Common";

function AttendancePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [attendanceList, setAttendanceList] = useState([]);
  const ref = useRef();
  const dateFormat = "DD MMM YYYY";
  // const calIcon = <CalendarIcon />

  useEffect(() => {
    axios
      .get("https://people.api.zainzo.com/api/admin/attendance/get/now", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setAttendanceList(res.data.attendance);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);


  // useEffect(() => {
  //   axios
  //     .get("https://people.api.zainzo.com/api/admin/attendance/get/now", {
  //       headers: {
  //         Authorization: `Bearer ${getToken()}`,
  //       },
  //     })
  //     .then((res) => {
  //       setAttendanceList(res.data.attendance);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);

  return (
    <div className="container h-screen flex flex-col">
      <div>
        <div className="w-auto mt-6 justify-between flex mx-4">
          <div className="flex items-center gap-6">
            <h1 className="text-[28px] font-2xl font-semibold">Absensi</h1>
            <div className="text-[#717171] bg-[#ededed] rounded-xl">
              <DatePicker
                defaultValue={moment("2015/01/01", dateFormat)}
                format={dateFormat}
                suffixIcon={<img src={CalendarIcon} width={"15px"} />}
                bordered={false}
                // style={{ color: 'blue' }}
              />
              {/* <img src={CalendarIcon} /> */}
            </div>
          </div>
          <div className="flex gap-3 right-12">
            <div className="w-[42px] h-[42px] bg-[#FEEEE9] rounded-xl flex items-center justify-center cursor-pointer" onClick={() => setShowModalDelete(true)}>
              <img src={TrashIcon} />
            </div>
            <div className="w-[42px] h-[42px] bg-[#F4F4F4] rounded-xl flex items-center justify-center cursor-pointer">
              <img src={HelpIcon} />
            </div>
            <div className="px-3 bg-[#EDF0FF] flex items-center rounded-xl gap-2 cursor-pointer">
              <p className="text-[#4D69FA]">Import</p>
              <img src={ImportIcon} />
            </div>
            <div className="px-3 bg-[#EDF0FF] flex items-center rounded-xl gap-2 cursor-pointer">
              <p className="text-[#4D69FA]">Export</p>
              <img src={ExportIcon} />
            </div>
            <div className="px-3 bg-[#EDF8F7] flex items-center rounded-xl gap-2 cursor-pointer">
              <p className="text-[#46BCAA]">Aktivitas</p>
              {/* <img src={ExportIcon}/> */}
            </div>
            <div className="px-3 bg-[#FEEEE9] flex items-center rounded-xl gap-2 cursor-pointer">
              <p className="text-[#D10234]">Laporan Absensi</p>
              {/* <img src={ExportIcon}/> */}
            </div>
          </div>
        </div>
        <ListDetailAttendance setShowModal={setShowModal} />
      </div>
      <div className="max-w-screen bg-white overflow-y-auto flex scrollbar-hide text-[14px] h-auto flex-col mt-12 rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)]">
        <div className="max-w-xl flex text-[14px]">
          <table className="sticky left-0 w-auto bg-white z-10">
            <thead className="border-r">
              <tr className="max-w-lg text-left">
                <th>
                  <input type="checkbox" className="ml-6 w-3 h-3 border border-solid border-black rounded accent-blue-500" />
                </th>
                <th className="pl-6 pr-24 py-8 whitespace-nowrap font-black">Nama Karyawan</th>
              </tr>
            </thead>
            <tbody className="border-r">
              {attendanceList.map((item, index) => {
                return (
                  <tr key={index} className="divide-y drop-shadow-md cursor-pointer" onClick={() => navigate(`/detail-attendance/${item.employee_id}`)}>
                    <td>
                      <input type="checkbox" className="ml-6 w-3 h-3 border border-solid border-black rounded accent-blue-500" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-3">
                      {/* <td className="whitespace-nowrap px-6 py-3" onClick={{}}> */}
                      {item.get_employee.employee_fullname}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <TableSide attendanceList={attendanceList} />
        </div>
        {/* </div> */}
        {showModal ? <TepatWaktu setShowModal={setShowModal} /> : null}
        {showModalDelete ? <DeleteAttendance setShowModalDelete={setShowModalDelete} /> : null}
        {showModalEdit ? <EditAttendance setShowModalEdit={setShowModalEdit} /> : null}
      </div>
    </div>
  );
}

export default AttendancePage;

function TableSide({ attendanceList }) {
  const toTextDateFormat = (date) => {
    var arrDate = date.split("-");
    var tahun = arrDate[0];
    var bulan = arrDate[1];
    var tanggal = arrDate[2];

    switch (bulan) {
      case "01":
        bulan = "Jan";
        break;
      case "02":
        bulan = "Feb";
        break;
      case "03":
        bulan = "Mar";
        break;
      case "04":
        bulan = "Apr";
        break;
      case "05":
        bulan = "Mei";
        break;
      case "06":
        bulan = "Jun";
        break;
      case "07":
        bulan = "Jul";
        break;
      case "08":
        bulan = "Agu";
        break;
      case "09":
        bulan = "Sep";
        break;
      case "10":
        bulan = "Okt";
        break;
      case "11":
        bulan = "Nov";
        break;
      case "12":
        bulan = "Des";
        break;
    }
    var tampilTanggal = tanggal + " " + bulan + " " + tahun;
    return tampilTanggal;
  };

  return (
    <table className="w-auto mr-96">
      <thead className="">
        <tr className="max-w-lg text-left text-[#3A3A3A]">
          <th className="font-semibold pl-10 pr-12 py-8 whitespace-nowrap">ID Karyawan</th>
          <th className="font-semibold pl-6 pr-16 py-8 whitespace-nowrap">Tanggal</th>
          <th className="font-semibold pl-6 pr-16 py-8 whitespace-nowrap">Shift</th>
          <th className="font-semibold pl-6 pr-8 py-8 whitespace-nowrap">Jadwal Masuk</th>
          <th className="font-semibold pl-6 pr-8 py-8 whitespace-nowrap">Jadwal Keluar</th>
          <th className="font-semibold pl-6 pr-8 py-8 whitespace-nowrap">Jam Masuk</th>
          <th className="font-semibold pl-6 pr-8 py-8 whitespace-nowrap">Jam Keluar</th>
          <th className="font-semibold pl-6 pr-8 py-8 whitespace-nowrap">Total Jam</th>
          <th className="font-semibold pl-6 pr-8 py-8 whitespace-nowrap">Lembur</th>
          <th className="font-semibold pl-6 pr-12 py-8 whitespace-nowrap">Kode Absensi</th>
          <th className="font-semibold pl-6 pr-12 py-8 whitespace-nowrap">Kode Cuti</th>
        </tr>
      </thead>
      <tbody>
        {attendanceList.map((item) => {
          return (
            <tr
              className="cursor-pointer text-black-main"
              // onClick={() => navigate("/detail-attendance/1")}
            >
              <td className="border-t whitespace-nowrap pl-10 py-3">{item.get_employee.employee_kode}</td>
              <td className="border-t whitespace-nowrap px-6 py-3">{toTextDateFormat(item.attendance_tanggal)}</td>
              <td className="border-t whitespace-nowrap px-6 py-3">
                <div className="bg-gray-100 w-auto h-8 px-2 py-2 rounded-full flex items-center">{item.attendance_shift} </div>
              </td>
              <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_jadwal_masuk.slice(0, 5)}</td>
              <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_jadwal_keluar.slice(0, 5)} </td>
              <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_jam_masuk.slice(0, 5)}</td>
              <td className={`border-t whitespace-nowrap px-6 py-3`}>{item.attendance_jam_keluar ? item.attendance_jam_keluar.slice(0, 5) : "-"} </td>
              <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_totalhour ? item.attendance_totalhour.slice(0, 5) : "-"} Jam</td>
              <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_lembur ? item.attendance_lembur.slice(0, 5) : "-"}</td>
              <td className="border-t whitespace-nowrap px-6 py-3">CM</td>
              <td className="border-t whitespace-nowrap px-6 py-3">CM</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
