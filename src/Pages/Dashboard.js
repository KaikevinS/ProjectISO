import React, { useCallback, useEffect, useState } from "react";
import UserPhoto from "../Assets/userphoto.svg";
import noDataFound from "../Assets/receipt-search.svg";
import noDataFoundDark from "../Assets/notfound-dark.svg";
import testBanner from "../Assets/test-banner-1.svg"
import testBanner2 from "../Assets/test-banner-2.png"
import testBanner3 from "../Assets/test-banner-3.png"
import verify from "../Assets/verify.svg";
import close from "../Assets/close-logo.svg";
import PieChart from "../Components/PieChart";
import axios from "axios";
import { getToken } from "../Utils/Common";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const [closed, setClosed] = useState(location.state ? location.state.closed : true);
  const [dataList, setDataList] = useState([]);
  const [dataGender, setDataGender] = useState({
    labels: ["male", "female"],
    datasets: [
      {
        label: "Gender",
        data: [1, 3],
        backgroundColor: ["#D10234", "#FFB22B"],
      },
    ],
  });
  const [dataEdu, setDataEdu] = useState({
    labels: ["SMA", "S1", "D3"],
    datasets: [
      {
        label: "Education",
        data: [50, 25, 25],
        backgroundColor: ["#D10234", "#FFB22B", "#44AB95"],
      },
    ],
  });
  const [dataAge, setDataAge] = useState({
    labels: ["SMA", "S1", "D3"],
    datasets: [
      {
        label: "Age",
        data: [50, 25, 25],
        backgroundColor: ["#D10234", "#FFB22B", "#44AB95"],
      },
    ],
  });
  const [dataxx, setDataxx] = useState({
    labels: ["SMA", "S1", "D3"],
    datasets: [
      {
        label: "xx",
        data: [50, 25, 25],
        backgroundColor: ["#D10234", "#FFB22B", "#44AB95"],
      },
    ],
  });

  useEffect(() => {
    axios
      .get("https://people.api.zainzo.com/api/admin/employee", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setDataList(res.data.employee);
        // console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const showGender = () => {
    axios
      .get("https://people.api.zainzo.com/api/admin/employee", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        const datalist = res.data.employee;
        // showGender();
        let fem = 0;
        let male = 0;
        let newData = [];
        let newDataGender;
        datalist.map((item) => {
          if (item.employee_relation.employee_gender !== null) {
            return item.employee_relation.employee_gender === "Female" ? fem++ : male++;
          }
          return item.employee_relation.employee_gender;
        });
        newData = [male, fem];
        newDataGender = {
          labels: ["male", "female"],
          datasets: [
            {
              label: "Gender",
              data: [...newData],
              backgroundColor: ["#D10234", "#FFB22B"],
            },
          ],
        };
        console.log(dataList);
        setDataGender(newDataGender);
      })
      .catch((err) => console.log(err.message));
    // fetch data gender
  };

  useEffect(() => {
    // setDataGender(getGender());
    showGender();
  }, []);


  const [testBannerArr, setTestBannerArr] = useState([
    testBanner, testBanner2, testBanner3
  ])
  const [activeBanner, setActiveBanner] = useState(0)
  const handleBanner = (e) => {
    setActiveBanner(e.target.getAttribute("data-index"))
  }

  
  const [date, setDate] = useState('')
  const currentDate = () => {
    // const dayArr = ["Senin, Selasa, Rabu, Kamis, Jum'at, Sabut, Minggu"];
    // const month = ["Januari, Februari, Maret, April, Mei, Juni, Juli, Agustus, September, Oktober, November, Desember"];
    // const date = new Date();
    // const dayDateNumber = date.getDate();
    // const year = date.getFullYear();

    // let dayInNumber = date.getDay() 
    // for (let index = 0; index < dayArr.length; index++) {
    //   if (dayInNumber == index) {
    //     setDate(dayArr[index])
    //     let dayInString = dayArr[index];
    //     break;
    //   }
    // }
    // for (let index = 0; index < month.length; index++) {
    //   if (date.getMonth() == index) {
    //     let monthInString = month[index];
    //     break;
    //   }
    // }
    // const fullDate = dayInString + ", " + dayDateNumber + " " + monthInString + " " + year
    const currentDate = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    return currentDate
  }

  return (
    <>
      {/* <div className={`grid grid-flow-row  ${closed && "hidden"}`}> */}
        {/* <div className={`bg-[#D1E7DD] max-h-20 px-6 py-3.5 rounded-2xl object-top z-20 flex flex-row items-center`}>
          <img src={verify} alt={"notification"} className="rounded-full w-6 h-6 mr-3" />
          <div className="flex-1">
            <div className="text-[#0F5132] font-semibold text-xl">Keputusan terbaik! </div>
            <div className="text-[#0F5132] ">Sekarang sebagian masalah bisnis anda telah berakhir.</div>
          </div>
          <img src={close} alt={"close"} className="text-right self-start relative -top-1 left-3 w-3 h-3 cursor-pointer" onClick={() => setClosed(true)} />
        </div>
        <div className="bg-[#7DAF98] h-2 w-[98%] justify-self-center rounded-br-2xl rounded-bl-2xl z-10"></div>
        <div className="bg-[#D1E7DD] h-2 w-[97%] justify-self-center rounded-br-2xl rounded-bl-2xl"></div> */}
        {/* <div className="bg-[#D1E7DD] h-28 z-0 relative"></div> */}
      {/* </div> */}
      <div className="w-full lg:h-[200px] h-[275px] bg-white lg:p-5 p-3 rounded-3xl flex flex-col gap-y-3 lg:flex-row mt-20 md:mt-16 lg:mt-0 shadow-[0px_16px_32px_rgba(0,0,0,0.1)]">
        <div className="lg:w-1/3 overflow-auto">
          <h1 className="text-black text-xl font-semibold">{currentDate()}</h1>
          <div className="text-sm mt-[16px] mb-[8px]">Akses Pintasan</div>
          <div className="overflow-auto flex gap-2 lg:flex-wrap whitespace-nowrap lg:whitespace-normal">
            <a href="#" className="bg-gray-200 p-2 rounded-xl text-[12px]">Permintaan Reimbursement</a>
            <a href="#" className="bg-gray-200 p-2 rounded-xl text-[12px]">Permintaan Libur</a>
            <a href="#" className="bg-gray-200 p-2 rounded-xl text-[12px]">Permintaan Cuti</a>
            <a href="#" className="bg-gray-200 p-2 rounded-xl text-[12px]">Pergantian shift</a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="bg-cover bg-center bg-no-repeat w-full h-full rounded-[15px] transition-all duration-500" style={{ backgroundImage: `url(${testBannerArr[activeBanner]})` }}>
            <div className="w-full absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {testBannerArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-700 ${activeBanner == index ? "bg-redColor":"bg-neutral-50"}`}
                    data-index={index}
                    onClick={handleBanner}
                  ></div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
      {/* grid start */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
        {/* 1 */}
        <div>
          <Newhires data={dataList} classname="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]" />
        </div>
        {/* 2 */}
        <Birthday data={dataList} classname="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] " />
        {/* 3 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm  overflow-auto scrollbar-hide dark:bg-[#292D32]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Upcoming Holiday</div>
          <div className="flex flex-col flex-1 items-center justify-center h-3/4">
            <img src={noDataFound} className="w-12 h-12 dark:hidden" alt="no data found" />
            <img src={noDataFoundDark} className="w-12 h-12 hidden dark:block" alt="no data found" />
            <div className="text-[#717171] dark:text-[#F8F9FA]">No Data Found</div>
          </div>
        </div>
        {/* 4 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Leave Information</div>
          <div className="flex flex-col flex-1 items-center justify-center h-3/4">
            <img src={noDataFound} className="w-12 h-12 dark:hidden" alt="no data found" />
            <img src={noDataFoundDark} className="w-12 h-12 hidden dark:block" alt="no data found" />
            <div className="text-[#717171] dark:text-[#F8F9FA]">No Data Found</div>
          </div>
        </div>
        {/* 5 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32]">
          <EmploymentStatus data={dataList} />
        </div>
        {/* 6 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]">
          <JobLevel data={dataList} />
        </div>
        {/* 7 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Length of Service</div>
          <div className="flex flex-col flex-1 items-center justify-center h-3/4">
            <img src={noDataFound} className="w-12 h-12 dark:hidden" alt="no data found" />
            <img src={noDataFoundDark} className="w-12 h-12 hidden dark:block" alt="no data found" />
            <div className="text-[#717171] dark:text-[#F8F9FA]">No Data Found</div>
          </div>
        </div>
        {/* 8 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Total Employee</div>
          <div className="flex flex-col flex-1 items-center justify-center h-3/4">
            <img src={noDataFound} className="w-12 h-12 dark:hidden" alt="no data found" />
            <img src={noDataFoundDark} className="w-12 h-12 hidden dark:block" alt="no data found" />
            <div className="text-[#717171] dark:text-[#F8F9FA]">No Data Found</div>
          </div>
        </div>
        {/* 9 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Gender</div>
          <div className="flex justify-center w-40 h-40 min-w-full my-5">
            <PieChart chartData={dataGender} />
          </div>
          <div className="grid grid-flow-col mt-10 grid-cols-3">
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#D10234] rounded-full w-4 flex-none"></div>
              male
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#FFB22B] rounded-full w-4 flex-none"></div>
              female
            </div>
          </div>
        </div>
        {/* 10 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Education</div>
          <div className="flex justify-center w-40 h-40 min-w-full my-5">
            <PieChart chartData={dataEdu} />
          </div>
          <div className="grid grid-flow-col mt-10 grid-cols-3">
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#D10234] rounded-full w-4 flex-none"></div>
              SMA
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#FFB22B] rounded-full w-4 flex-none"></div>
              S1
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#44AB95] rounded-full w-4 flex-none"></div>
              D3
            </div>
          </div>
        </div>
        {/* 11 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Age</div>
          <div className="flex justify-center w-40 h-40 min-w-full my-5">
            <PieChart chartData={dataAge} />
          </div>
          <div className="grid grid-flow-col mt-10 grid-cols-3">
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#D10234] rounded-full w-4 flex-none"></div>
              SMA
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#FFB22B] rounded-full w-4 flex-none"></div>
              S1
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#44AB95] rounded-full w-4 flex-none"></div>
              D3
            </div>
          </div>
        </div>
        {/* 12 */}
        <div className="min-w-full aspect-square p-5 bg-white rounded-3xl items-center shadow-[0px_16px_32px_rgba(0,0,0,0.1)] font-inter text-sm overflow-auto scrollbar-hide dark:bg-[#292D32] dark:text-[#F8F9FA]">
          <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">xx</div>
          <div className="flex justify-center w-40 h-40 min-w-full my-5">
            <PieChart chartData={dataxx} />
          </div>
          <div className="grid grid-flow-col mt-10 grid-cols-3">
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#D10234] rounded-full w-4 flex-none"></div>
              SMA
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#FFB22B] rounded-full w-4 flex-none"></div>
              S1
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="h-4 bg-[#44AB95] rounded-full w-4 flex-none"></div>
              D3
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Newhires = ({ data = [], classname = "" }) => {
  const isNew = (joinDate) => {
    let today = new Date();
    let join = new Date(joinDate);
    let yearDiff = today.getYear() - join.getYear();
    let monthDiff = today.getMonth() - join.getMonth();
    let dateDiff = today.getDate() - join.getDate();
    if (yearDiff === 0 && (monthDiff < 0 || (monthDiff === 0 && dateDiff < 8))) {
      return true;
    } else {
      return false;
    }
  };

  const isData = () => {
    let datacount = 0;
    data.map((item) => {
      return isNew(item.employment_joindate) && item.jobposition_name ? datacount++ : datacount;
    });
    return datacount > 0 ? true : false;
  };

  return (
    <div className={classname}>
      <div className="text-[#3A3A3A] dark:text-[#F8F9FA] font-semibold mb-5">New Hires</div>
      {data && isData() ? (
        data.map((item) => {
          return (
            item.employment_joindate &&
            item.jobposition_name &&
            isNew(item.employment_joindate) && (
              <div className="grid gap-5 py-2">
                <div className="flex flex-row gap-x-3 items-center text-left">
                  <div
                    style={{
                      backgroundImage: `url(${!item.employee_relation.employee_photo ? UserPhoto : "https://people.api.zainzo.com/public/storage/" + item.employee_relation.employee_photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="rounded-full w-11 h-11 mr-3"
                  ></div>
                  <div className="">
                    <div className="text-[#212121] font-semibold dark:text-[#F8F9FA]">{item.employee_relation.employee_fullname ? item.employee_relation.employee_fullname : "Margaret Febiola"}</div>
                    <div className="text-[#717171] dark:text-[#F8F9FA]">{item.jobposition_name.job_position_name ? item.jobposition_name.job_position_name : ""}</div>
                  </div>
                </div>
              </div>
            )
          );
        })
      ) : (
        <div className="flex flex-col flex-1 items-center justify-center h-3/4">
          <img src={noDataFound} className="w-12 h-12 dark:hidden" alt="no data found" />
          <img src={noDataFoundDark} className="w-12 h-12 hidden dark:block" alt="no data found" />
          <div className="text-[#717171] dark:text-[#F8F9FA]">No Data Found</div>
        </div>
      )}
    </div>
  );
};
const Birthday = ({ data = [], classname = "" }) => {
  const isTomorrow = (birthDate) => {
    let today = new Date();
    let birth = new Date(birthDate);
    let monthDiff = today.getMonth() - birth.getMonth();
    let dateDiff = today.getDate() - birth.getDate();
    if (monthDiff === 0 && today.getDate() + 1 === birth.getDate()) {
      return true;
    } else {
      return false;
    }
  };

  const isToday = (birthDate) => {
    let today = new Date();
    let birth = new Date(birthDate);
    let monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff === 0 && today.getDate() === birth.getDate()) {
      return true;
    } else {
      return false;
    }
  };

  const isData = () => {
    let datacount = 0;
    data.map((item) => {
      return (isToday(item.employee_relation.employee_dob) || isTomorrow(item.employee_relation.employee_dob)) && item.jobposition_name ? datacount++ : datacount;
    });
    return datacount > 0 ? true : false;
  };

  return (
    <div className={classname}>
      <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Birthday</div>
      {data && isData() ? (
        <div className="divide-y dark:divide-[#717171]">
          <div className="my-2">
            <div className="text-[#212121] dark:text-[#F8F9FA] font-semibold mb-3">Today</div>
            {data.map((item) => {
              return (
                item.employee_relation.employee_dob &&
                item.jobposition_name &&
                isToday(item.employee_relation.employee_dob) && (
                  <div className="grid gap-5 py-2 dark:text-[#F8F9FA]">
                    <div className="flex flex-row gap-x-3 items-center text-left">
                      <div
                        style={{
                          backgroundImage: `url(${!item.employee_relation.employee_photo ? UserPhoto : "https://people.api.zainzo.com/public/storage/" + item.employee_relation.employee_photo})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="rounded-full w-11 h-11 mr-3"
                      ></div>
                      <div className="">
                        <div className="text-[#212121] font-semibold dark:text-[#F8F9FA]">{item.employee_relation.employee_fullname ? item.employee_relation.employee_fullname : "Margaret Febiola"}</div>
                        <div className="text-[#717171] dark:text-[#F8F9FA]">{item.jobposition_name.job_position_name ? item.jobposition_name.job_position_name : ""}</div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className="mb-5 pt-2 dark:text-[#F8F9FA]">
            <div className="text-[#212121] font-semibold mb-3 dark:text-[#F8F9FA]">Tomorrow</div>
            {data.map((item) => {
              return (
                item.employee_relation.employee_dob &&
                item.jobposition_name &&
                isTomorrow(item.employee_relation.employee_dob) && (
                  <div className="grid gap-5 py-2">
                    <div className="flex flex-row gap-x-3 items-center text-left">
                      <div
                        style={{
                          backgroundImage: `url(${!item.employee_relation.employee_photo ? UserPhoto : "https://people.api.zainzo.com/public/storage/" + item.employee_relation.employee_photo})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="rounded-full w-11 h-11 mr-3"
                      ></div>
                      <div className="">
                        <div className="text-[#212121] font-semibold dark:text-[#F8F9FA]">{item.employee_relation.employee_fullname ? item.employee_relation.employee_fullname : "Margaret Febiola"}</div>
                        <div className="text-[#717171] dark:text-[#F8F9FA]">{item.jobposition_name.job_position_name ? item.jobposition_name.job_position_name : ""}</div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-1 items-center justify-center h-3/4">
          <img src={noDataFound} className="w-12 h-12 dark:hidden" alt="no data found" />
          <img src={noDataFoundDark} className="w-12 h-12 hidden dark:block" alt="no data found" />
          <div className="text-[#717171] dark:text-[#F8F9FA]">No Data Found</div>
        </div>
      )}
    </div>
  );
};

const EmploymentStatus = ({ data = [], classname = "" }) => {
  const percent = () => {
    let jobstatusName = [];
    let jobstatusNameCount = {};
    data.map((item) => {
      if (item.jobstatus_name !== null) {
        jobstatusName.push(item.jobstatus_name.job_status_name);
      }
      return item.jobstatus_name;
    });
    for (const num of jobstatusName) {
      jobstatusNameCount[num] = jobstatusNameCount[num] ? jobstatusNameCount[num] + 1 : 1;
    } //e.g -> {contract: 2, permanent: 1, probation: 1}
    let jobstatus = Object.keys(jobstatusNameCount);
    let jobstatusCount = Object.values(jobstatusNameCount);
    let jobObj = [
      { name: "Permanent", jobPercent: 60, style: "bg-[#EC6B56] rounded-l-full", bgColor: "bg-[#EC6B56]", count: 0 },
      { name: "Contract", jobPercent: 20, style: "bg-[#FFC154]", bgColor: "bg-[#FFC154]", count: 0 },
      { name: "Probation", jobPercent: 20, style: "bg-[#47B39C] rounded-r-full", bgColor: "bg-[#47B39C]", count: 0 },
    ];
    let percent = [];
    for (let jobIndex = 0; jobIndex < jobstatusCount.length; jobIndex++) {
      // console.log(jobstatus[jobIndex]);
      percent[jobIndex] = (jobstatusCount[jobIndex] / jobstatusName.length) * 100;
      jobObj[jobIndex] = {
        name: jobstatus[jobIndex],
        jobPercent: Math.round(percent[jobIndex]),
        style: jobObj[jobIndex] ? jobObj[jobIndex].style : "",
        bgColor: jobObj[jobIndex] ? jobObj[jobIndex].bgColor : "",
        count: jobstatusCount[jobIndex],
      };
    }
    while (jobObj.length > jobstatusCount.length) {
      jobObj.pop();
    }
    return jobObj;
  };

  const total = () => {
    let jobstatusName = [];
    data.map((item) => {
      if (item.jobstatus_name !== null) {
        jobstatusName.push(item.jobstatus_name.job_status_name);
      }
      return item.jobstatus_name;
    });
    return jobstatusName.length;
  };

  return (
    <>
      <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Employment Status</div>
      <div className="min-w-full flex flex-row h-4 rounded-full mb-5 dark:text-[#F8F9FA]">
        {percent().map((item, index) => {
          return <div className={`${item.style} ${index === 2 || index + 1 === percent().length ? "rounded-r-full" : ""}`} style={{ width: item.jobPercent + "%" }}></div>;
        })}
      </div>
      <div className="grid mt-14 divide-y dark:divide-[#717171]">
        <div className="grid grid-flow-col pb-2">
          <div>Total</div>
          <div className="text-right text-[#717171] dark:text-[#F8F9FA]">{total()}</div>
        </div>
        {percent().map((item) => {
          return (
            <div className="flex flex-row items-center gap-x-2 py-2">
              <div className={`h-4 ${item.bgColor} rounded-full w-4  flex-none`}></div>
              <div className="w-32 flex-none">{item.name}</div>
              <div className="flex-auto text-[#717171] dark:text[F8F9FA] dark:text-[#F8F9FA]">{item.jobPercent}%</div>
              <div className="text-right text-[#717171] dark:text[F8F9FA] dark:text-[#F8F9FA]">{item.count}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
const JobLevel = ({ data = [], classname = "" }) => {
  const percent = () => {
    let joblevelName = [];
    let joblevelNameCount = {};
    data.map((item) => {
      if (item.joblevel_name !== null) {
        joblevelName.push(item.joblevel_name.job_level_name);
      }
      return item.joblevel_name;
    });
    for (const num of joblevelName) {
      joblevelNameCount[num] = joblevelNameCount[num] ? joblevelNameCount[num] + 1 : 1;
    } //e.g -> {contract: 2, permanent: 1, probation: 1}
    let joblevel = Object.keys(joblevelNameCount);
    let joblevelCount = Object.values(joblevelNameCount);
    let jobObj = [
      { name: "Permanent", jobPercent: 60, style: "bg-[#EC6B56] rounded-l-full", bgColor: "bg-[#EC6B56]", count: 0 },
      { name: "Contract", jobPercent: 20, style: "bg-[#FFC154] ", bgColor: "bg-[#FFC154]", count: 0 },
      { name: "Probation", jobPercent: 20, style: "bg-[#47B39C]", bgColor: "bg-[#47B39C]", count: 0 },
    ];
    let percent = [];
    for (let jobIndex = 0; jobIndex < joblevelCount.length; jobIndex++) {
      percent[jobIndex] = (joblevelCount[jobIndex] / joblevelName.length) * 100;
      jobObj[jobIndex] = {
        name: joblevel[jobIndex],
        jobPercent: Math.round(percent[jobIndex]),
        style: jobObj[jobIndex] ? jobObj[jobIndex].style : "",
        bgColor: jobObj[jobIndex] ? jobObj[jobIndex].bgColor : "",
        count: joblevelCount[jobIndex],
      };
    }
    while (jobObj.length > joblevelCount.length) {
      jobObj.pop();
    }
    return jobObj;
  };

  const total = () => {
    let joblevelName = [];
    data.map((item) => {
      if (item.joblevel_name !== null) {
        joblevelName.push(item.joblevel_name.job_level_name);
      }
      return item.joblevel_name;
    });
    return joblevelName.length;
  };

  const getWidth = (percent) => {
    let width = "w-[" + percent.to + "%]";
    return width;
  };

  return (
    <>
      <div className="text-[#3A3A3A] font-semibold mb-5 dark:text-[#F8F9FA]">Job Level</div>
      <div className="min-w-full flex flex-row h-4 rounded-full mb-5">
        {percent().map((item, index) => {
          return <div className={`${item.style} ${index === 2 || index + 1 === percent().length ? "rounded-r-full" : ""}`} style={{ width: item.jobPercent + "%" }}></div>;
        })}
      </div>
      <div className="grid mt-14 divide-y dark:divide-[#717171]">
        <div className="grid grid-flow-col pb-2">
          <div>Total</div>
          <div className="text-right text-[#717171] dark:text-[#F8F9FA]">{total()}</div>
        </div>
        {percent().map((item) => {
          return (
            <div className="flex flex-row items-center gap-x-2 py-2">
              <div className={`h-4 ${item.bgColor} rounded-full w-4  flex-none`}></div>
              <div className="w-32 flex-none">{item.name}</div>
              <div className="flex-auto text-[#717171] dark:text-[#F8F9FA]">{item.jobPercent}%</div>
              <div className="text-right text-[#717171] dark:text-[#F8F9FA]">{item.count}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
