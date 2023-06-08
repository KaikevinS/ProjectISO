import React, { createContext, useEffect, useState } from "react";
import editicon from "../../Assets/editicon.svg";
import Personal from "./general/Personal";
import Employment from "./general/Employment";
import Education from "./general/Education";
import arrowIcon from "../../Assets/arrow-right.svg";
import userIcon from "../../Assets/user.svg";
import clockIcon from "../../Assets/clock.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../Utils/Common";
import UserPhoto from "../../Assets/userphoto.svg";

export const SelectImgContext = createContext();

function DetailEmployee() {
  const [switchMenuIndex, setSwitchMenuIndex] = useState(0);
  const [menuOpenIndex, setMenuOpenIndex] = useState(-1);
  const [selectImg, setSelectImg] = useState(null);
  const [editImg, setEditImg] = useState(false);

  const { id } = useParams();
  const [datalist, setData] = useState([]);

  useEffect(() => {
    // console.log(selectImg);
    // console.log(menuOpenIndex);
    axios
      .get(`https://people.api.zainzo.com/api/admin/employee/personal/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setData(res.data.data[0]);
        console.log(res.data.data[0]);
      })
      .catch((err) => console.log(err.message));
  }, [id]);
  // state to show the sidebar menu
  const [listMenu, setListMenu] = useState([
    {
      title: "Ringkasan",
      has_submenu: true,
      submenu: [
        { title: "Data Pribadi", viewIndex: 0 },
        { title: "Pekerjaan", viewIndex: 1 },
        { title: "Pendidikan dan Pengalaman", viewIndex: 2 },
        { title: "Informasi Tambahan", viewIndex: 3 },
      ],
      icon: userIcon,
      menuOpen: true,
    },
    { title: "Absensi", has_submenu: true, submenu: [], icon: clockIcon, menuOpen: false },
  ]);

  const CompPersonal = () => {
    return <Personal id={id} editImg={setEditImg} selectImg={selectImg} />;
  };
  const CompEmployment = () => {
    return <Employment id={id} />;
  };

  const CompEducation = () => {
    return <Education id={id} />;
  };

  const [subMenuView, setSubMenuView] = useState(
    [
      {
        view: () => CompPersonal
      },
      {
        view: () => CompEmployment
      },
      {
        view: () => CompEducation
      }
    ]
  );
  const [ViewNow, setViewNow] = useState(() => CompPersonal);

  // state to show what menu is being open
  const OpenMenu = (index) => {
    const newArr = listMenu;
    newArr[index].menuOpen = !newArr[index].menuOpen;
    menuOpenIndex !== index ? setMenuOpenIndex(index) : setMenuOpenIndex(-1);
    setListMenu(newArr);
  };

  // state to show the page 
  const showPage = (viewIndex) => {
    setViewNow(subMenuView[viewIndex].view);
    setSwitchMenuIndex(viewIndex);
    console.log(viewIndex);
  };

  const handleClickImg = () => {
    document.getElementById("input-img").click();
  };

  const handleFileSelect = (e) => {
    setSelectImg(e.target.files[0]);
  };

  return (
    <div className="flex flex-col">
      {/* all container */}
      <div className="shadow-[0_1.6rem_3rem_rgba(0,0,0,0.1)] bg-white rounded-xl overflow-auto flex flex-row divide-x">
        {/* sidebar kiri */}
        <div className="flex flex-col items-start w-96">
          {/* profil */}
          <div className="relative flex flex-col ml-16 mt-8">
            <img src={!datalist.employee_photo ? UserPhoto : "https://people.api.zainzo.com/public/storage/" + datalist.employee_photo} alt="profil" className="w-20 h-20 rounded-full" onClick={() => console.log(selectImg)} />
            <input type="file" id="input-img" accept=".jpg" onChange={handleFileSelect} style={{ display: "none" }} />
            <img src={editicon} alt="edit" className={`absolute left-14 top-14 cursor-pointer ${!editImg ? "hidden" : ""}`} onClick={handleClickImg} />
            <div className="text-center font-bold whitespace-normal text-lg mt-2 mb-6 text-black-main">{datalist.employee_fullname}</div>
          </div>

          {/* menu list */}
          <div className="flex-auto mx-8 self-start w-64">
            <ul>
              {listMenu.map((item, index) => {
                return (
                  <div key={index} className={`flex flex-col cursor-pointer text-sm `}>
                    <li
                      key={index}
                      className={`font-medium flex-col cursor-pointer `}
                      onClick={() => {
                        OpenMenu(index);
                      }}
                    >
                      <span className="flex font-medium gap-x-4 items-center my-[10px]">
                        <span className="">
                          <img src={item.icon} alt="menuicon" />
                        </span>
                        <span className="flex-1 text-black-main">{item.title} </span>
                        {item.has_submenu && <img src={arrowIcon} alt="open menu" className={` mt-1 mr-2 ${item.menuOpen ? "rotate-90 duration-200" : ""}`} />}
                      </span>
                    </li>
                    <span className="whitespace-nowrap">
                      {item.has_submenu && item.menuOpen ? (
                        <ul className="flex flex-col gap-2 w-full mx-[30px]">
                          {item.submenu.map((submenu, indexSub) => {
                            return (
                              <li
                                className={`ml-1 my-[10px]
                                hover:text-red-main ${switchMenuIndex === indexSub ? "text-red-main" : "text-gray-disabledText"}`}
                                key={indexSub}
                                onClick={() => {
                                  showPage(submenu.viewIndex);
                                }}
                              >
                                {submenu.title}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        {/* component kanan */}
        <div className="overflow-auto scrollbar-hide pb-4">
          {/* <div className="w-full"> */}
          <SelectImgContext.Provider value={{ selectImg }}>
            <ViewNow />
            {/* <button
              onClick={() => {
              }}
            >
              press
            </button> */}
          </SelectImgContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default DetailEmployee;
