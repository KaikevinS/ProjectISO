import { useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { DatePicker } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import TrashIcon from "../../../Assets/icon-attendance/trash-icon.svg";
import HelpIcon from "../../../Assets/icon-attendance/help-icon.svg";
import ImportIcon from "../../../Assets/icon-attendance/import-icon.svg";
import ExportIcon from "../../../Assets/icon-attendance/export-icon.svg";
import EditIcon from "../../../Assets/icon-attendance/edit-icon.svg";
import CalendarIcon from "../../../Assets/calendar.svg";
import moment from "moment";
import DeleteAttendance from "./../Components/DeleteAttendance";
import EditAttendance from "./../Components/EditAttendance";
import TepatWaktu from "./../Components/TepatWaktu";
import axios from "axios";
import { getToken } from "./../../../Utils/Common";

function DetailAttendance() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [attendanceList, setAttendanceList] = useState([]);
  const dateFormat = "DD MMM YYYY";
  const [currentId, setCurrentId] = useState(-1);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get("https://people.api.zainzo.com/api/admin/attendance/get/now", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        console.log(res.data.attendance);
        const listOfId = res.data.attendance.filter((item) => {
          return item.employee_id === id;
        });
        setAttendanceList(listOfId);
      })
      .catch((err) => console.log(err.message));
  }, []);

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

  const handleDelete = (idDelete) => {
    setCurrentId(idDelete);
    setShowModalDelete(true);
  };

  return (
    <>
      {/* <div className="container h-screen overflow-auto flex flex-col"> */}
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
        <DetailEmployeeAttendance setShowModal={setShowModal} attendanceList={attendanceList} />
      </div>
      <div className="max-w-screen bg-white overflow-auto flex scrollbar-hide text-[14px] h-auto flex-col mt-12 rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)]">
        {/* <TableSide attendanceList={attendanceList} /> */}
        <table className="w-auto">
          <thead className="">
            <tr className=" text-left text-[#3A3A3A]">
              <th className="border-b-[1.5px]">
                <input type="checkbox" className="ml-6 w-3 h-3 border border-solid border-black rounded accent-blue-500" />
              </th>
              <th className="font-semibold border-b-[1.5px] pl-6 pr-16 py-8 whitespace-nowrap">Tanggal</th>
              <th className="font-semibold border-b-[1.5px] pl-6 pr-16 py-8 whitespace-nowrap">Shift</th>
              <th className="font-semibold border-b-[1.5px] pl-6 pr-8 py-8 whitespace-nowrap">Jadwal Masuk</th>
              <th className="font-semibold border-b-[1.5px] pl-6 pr-8 py-8 whitespace-nowrap">Jadwal Keluar</th>
              <th className="font-semibold border-b-[1.5px] pl-6 pr-8 py-8 whitespace-nowrap">Jam Masuk</th>
              <th className="font-semibold border-b-[1.5px] pl-6 pr-8 py-8 whitespace-nowrap">Jam Keluar</th>
              <th className="font-semibold border-b-[1.5px] pl-6 pr-8 py-8 whitespace-nowrap">Lembur</th>
              <th className="font-semibold border-b-[0.5px] pl-6 pr-8 py-8 whitespace-nowrap"></th>
              {/* <th className="font-semibold pl-6 pr-12 py-8 whitespace-nowrap">Kode Absensi</th>
          <th className="font-semibold pl-6 pr-12 py-8 whitespace-nowrap">Kode Cuti</th> */}
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((item) => {
              return (
                <tr
                  className="cursor-pointer text-black-main"
                  // onClick={() => navigate("/detail-attendance/1")}
                >
                  <td className="border-t">
                    <input type="checkbox" className="ml-6 w-3 h-3 border border-solid border-black rounded accent-blue-500" />
                  </td>
                  <td className="border-t whitespace-nowrap px-6 py-3">{toTextDateFormat(item.attendance_tanggal)}</td>
                  <td className="border-t whitespace-nowrap px-6 py-3">
                    <div className="bg-gray-100 w-auto h-8 px-2 py-2 rounded-full flex items-center">{item.attendance_shift} </div>
                  </td>
                  <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_jadwal_masuk.slice(0, 5)}</td>
                  <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_jadwal_keluar.slice(0, 5)} </td>
                  <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_jam_masuk.slice(0, 5)}</td>
                  <td className={`border-t whitespace-nowrap px-6 py-3`}>{item.attendance_jam_keluar ? item.attendance_jam_keluar : "-"} </td>
                  <td className="border-t whitespace-nowrap px-6 py-3">{item.attendance_lembur ? item.attendance_lembur : "-"}</td>
                  <td className="border-t whitespace-nowrap pl-20 pr-8 py-5 flex flex-row gap-x-8 justify-items-end">
                    <div
                      className="cursor-pointer w-[20px] h-[20px] "
                      onClick={() => {
                        setShowModalEdit(true);
                      }}
                    >
                      <img src={EditIcon} alt="edit" />
                    </div>
                    <div
                      className="cursor-pointer w-[20px] h-[20px] "
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      <img src={TrashIcon} alt="delete" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* </div> */}
        {showModal ? <TepatWaktu setShowModal={setShowModal} /> : null}
        {showModalDelete ? <DeleteAttendance setShowModalDelete={setShowModalDelete} idDelete={currentId} /> : null}
        {showModalEdit ? <EditAttendance setShowModalEdit={setShowModalEdit} /> : null}
      </div>
    </>
  );
}

export default DetailAttendance;

function YearSelect() {
  const [selectedYear, setSelectedYear] = useState("");
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [options, setOptions] = useState([]);

  const handleOptionClick = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 2010; year--) {
      years.push(
        <button key={year} value={year} onClick={handleOptionClick} className="hover:text-redColor w-full text-left">
          {year}
        </button>
      );
    }
    setOptions(years);
  }, []);

  return (
    <div className="relative appearance-none h-[38px] border border-gray-500 text-gray-500 rounded-full drop-shadow-2xl text-sm mr-2 w-36 leading-tight">
      <div onClick={() => setIsOptionVisible(!isOptionVisible)} className="flex w-auto items-center justify-between py-2 px-4 cursor-pointer">
        <span>{selectedYear ? selectedYear : "Year"}</span>
        <IoChevronDownOutline className="text-gray-500" />
      </div>
      {isOptionVisible && (
        <div className="absolute mt-3 flex flex-col gap-2 z-10 w-36 h-24 overflow-auto rounded-md bg-white p-3" onClick={() => setIsOptionVisible(false)}>
          {options}
        </div>
      )}
    </div>
  );
}

function MonthSelect() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [options, setOptions] = useState([]);

  const handleOptionClick = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
  };

  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const options = months.map((month, index) => (
      <button key={index} value={month} onClick={handleOptionClick} className="hover:text-redColor w-full text-left">
        {month}
      </button>
    ));
    setOptions(options);
  }, []);

  return (
    <div className="relative appearance-none h-[38px] border border-gray-500 text-gray-500 rounded-full drop-shadow-2xl px- text-sm mr-2 w-36 leading-tight">
      <div onClick={() => setIsOptionVisible(!isOptionVisible)} className="flex w-auto items-center justify-between py-2 px-4 cursor-pointer">
        <span>{selectedMonth ? selectedMonth : "Month"}</span>
        <IoChevronDownOutline className="text-gray-500" />
      </div>
      {isOptionVisible && (
        <div className="absolute mt-3 flex flex-col gap-2 z-10 w-36 h-24 overflow-auto rounded-md bg-white p-3" onClick={() => setIsOptionVisible(false)}>
          {options}
        </div>
      )}
    </div>
  );
}

function DetailEmployeeAttendance({ attendanceList, setShowModal }) {
  return (
    <div className="mt-12 py-5 pl-5 bg-white text-sm rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)] ">
      {/* <div className=" max-w-screen mt-12 scrollbar-hide h-[138px] bg-white overflow-auto px-8 flex justify-center text-sm rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)]"> */}
      <div className="scrollbar-hide overflow-auto whitespace-nowrap ">
        <div className="grid grid-flow-col col-span-2 items-center">
          <div className="flex justify-evenly flex-col gap-3">
            <p className="text-gray-400">001 - Finance</p>
            <p className="text-xl font-[900]">{attendanceList[0] ? attendanceList[0].get_employee.employee_fullname : "-"}</p>
          </div>
          <div className="grid grid-flow-col w-auto justify-center divide-x justify-self-end">
            <section className="border-l cursor-pointer">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3 " onClick={() => setShowModal(true)}>
                <p className="text-gray-400">Tepat Waktu</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Terlambat</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Absen</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Istirahat</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Libur</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
