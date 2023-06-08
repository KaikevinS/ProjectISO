import React, { useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

function EditAttendance({ setShowModalEdit }) {
  return (
    <>
      <div className="backdrop-blur-sm justify-end items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[6000] outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 p-6 shadow-lg gap-4 w-[35rem] relative flex flex-col justify-between bg-white h-screen outline-none focus:outline-none">
            {/*header*/}
            <div>
              <p className="text-[16px] font-extrabold">Edit Absensi</p>
              <div className="flex flex-col gap-3 mt-12">
                <div
                  class="relative mb-3 w-full border-[1px] flex h-[60px] rounded-xl text-[#B4B4B4]"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label"
                    value={"Muhamad Putra Satria"}
                  />
                  <label
                    for="exampleFormControlInput1"
                    class="pointer-events-none text-[12px] absolute top-0 bg-white left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] px-1 leading-[1.6] text-[#B4B4B4] transition-all duration-200 ease-out -translate-y-[1rem] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >
                    Nama Karyawan
                  </label>
                </div>
                <div
                  class="relative mb-3 w-full border-[1px] flex h-[60px] rounded-xl text-[#B4B4B4]"
                  data-te-input-wrapper-init
                >
                  {/* <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                /> */}
                  <ShiftSelect />
                  <label
                    for="exampleFormControlInput1"
                    class="pointer-events-none text-[12px] absolute top-0 bg-white left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] px-1 leading-[1.6] transition-all duration-200 ease-out -translate-y-[1rem] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >
                    Shift
                  </label>
                </div>
                <div className="flex gap-3">
                  <div
                    class="relative mb-3 w-full border-[1px] flex h-[60px] rounded-xl text-[#B4B4B4]"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Example label"
                      value={"00:00"}
                    />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none text-[12px] absolute top-0 bg-white left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] px-1 leading-[1.6] text-[#B4B4B4] transition-all duration-200 ease-out -translate-y-[1rem] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Jam Masuk
                    </label>
                  </div>
                  <div
                    class="relative mb-3 w-full border-[1px] flex h-[60px] rounded-xl text-[#B4B4B4]"
                    data-te-input-wrapper-init
                  >
                    {/* <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                /> */}
                    {/* <ShiftSelect /> */}
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Example label"
                      value={"00:00"}
                    />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none text-[12px] absolute top-0 bg-white left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] px-1 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1rem] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Jam Keluar
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="text-[14px]">
              Menghapus kehadiran akan mengatur ulang absensi karyawan
            </p> */}
            <div className="flex justify-end gap-4 mt-2 bottom-0">
              <button
                className="w-[90px] h-[40px] flex items-center rounded-xl justify-center text-redColor bg-[#F4F4F4]"
                onClick={() => setShowModalEdit(false)}
              >
                Batal
              </button>
              <button className="w-[90px] h-[40px] flex items-center rounded-xl justify-center text-white bg-[#D10234]">
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

export default EditAttendance;

function ShiftSelect() {
  const [selectedShift, setSelectedShift] = useState("");
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [options, setOptions] = useState([]);

  const handleOptionClick = (event) => {
    const shift = event.target.value;
    setSelectedShift(shift);
  };

  useEffect(() => {
    const shifts = [
      "Hari kerja (08:00 - 17:00)",
      "Hari kerja (08:00 - 17:00)",
      "Hari kerja (08:00 - 17:00)",
      "Hari kerja (08:00 - 17:00)",
    ];
    const options = shifts.map((shift, index) => (
      <button
        key={index}
        value={shift}
        onClick={handleOptionClick}
        className="hover:text-redColor w-full text-left"
      >
        {shift}
      </button>
    ));
    setOptions(options);
  }, []);

  return (
    <div className="relative appearance-none h-[38px] mt-[12px] text-[#B4B4B4] rounded-full drop-shadow-2xl text-sm mr-2 w-full leading-tight z-30">
      <div
        onClick={() => setIsOptionVisible(!isOptionVisible)}
        className="flex w-auto items-center justify-between py-2 px-4 cursor-pointer"
      >
        <span>{selectedShift ? selectedShift : "Shift"}</span>
        <IoChevronDownOutline className="text-[#B4B4B4]" />
      </div>
      {isOptionVisible && (
        <div
          className=" mt-4 flex flex-col gap-2 w-full h-24 overflow-auto rounded-md bg-white p-3"
          onClick={() => setIsOptionVisible(false)}
        >
          {options}
        </div>
      )}
    </div>
  );
}
