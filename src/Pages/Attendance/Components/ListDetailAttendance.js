import React, { useState } from "react";

function ListDetailAttendance({ setShowModal }) {
  const [todayDate, setTodayDate] = useState(new Date());

  const toTextDateFormat = (todayDate) => {
    var tahun = todayDate.getFullYear();
    var bulan = todayDate.getMonth();
    var tanggal = todayDate.getDate();

    switch (bulan) {
      case 0:
        bulan = "Januari";
        break;
      case 1:
        bulan = "Februari";
        break;
      case 2:
        bulan = "Maret";
        break;
      case 3:
        bulan = "April";
        break;
      case 4:
        bulan = "Mei";
        break;
      case 5:
        bulan = "Juni";
        break;
      case 6:
        bulan = "Juli";
        break;
      case 7:
        bulan = "Agustus";
        break;
      case 8:
        bulan = "September";
        break;
      case 9:
        bulan = "Oktober";
        break;
      case 10:
        bulan = "November";
        break;
      case 11:
        bulan = "Desember";
        break;
    }
    var tampilTanggal = tanggal + " " + bulan + " " + tahun;
    return tampilTanggal;
  };

  return (
    <div className="mt-12 p-5 bg-white text-sm rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)] ">
      {/* <div className=" max-w-screen mt-12 scrollbar-hide h-[138px] bg-white overflow-auto px-8 flex justify-center text-sm rounded-xl shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)]"> */}
      <div className="scrollbar-hide overflow-auto whitespace-nowrap ">
        <div className="flex items-center gap-x-8">
          <div className="flex justify-evenly flex-col gap-3">
            <p className="text-gray-400">Data Harian Real Time</p>
            <p className="text-xl font-[900]">Hari ini, {toTextDateFormat(todayDate)}</p>
          </div>
          <div className="flex w-auto justify-center">
            <section className="border-r">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Karyawan</p>
                <p className="text-[20px]">40</p>
              </div>
            </section>
            <section className="border-r cursor-pointer">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3 " onClick={() => setShowModal(true)}>
                <p className="text-gray-400">Tepat Waktu</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="border-r">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Terlambat</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="border-r">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Absen</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="border-r">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Istirahat</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="border-r">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">Libur</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
            <section className="border-r">
              <div className="w-36 p-4 rounded-xl h-28 hover:bg-[#D10234] hover:bg-opacity-20 flex flex-col justify-center gap-3">
                <p className="text-gray-400">No Check-In</p>
                <p className="text-[20px] text-redColor">40</p>
              </div>
            </section>
          </div>
          <div className="flex justify-center text-redColor">Lihat Semua</div>
        </div>
      </div>
    </div>
  );
}

export default ListDetailAttendance;
