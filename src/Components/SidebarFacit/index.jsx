/* eslint-disable no-unused-vars */

// Components
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import zainzoWhiteLogo from "../../Assets/facitIcons/people.svg";
import dashboardIcon from "../../Assets/facitIcons/home-03.svg";
import employeeIcon from "../../Assets/facitIcons/users-01.svg";
import sidebarToggle from "../../Assets/facitIcons/sidebar-toggle.svg";
import attendanceIcon from "../../Assets/facitIcons/attendance-icon.svg";
import chevronRight from "../../Assets/facitIcons/chevron-right.svg";
import settingsIcon from "../../Assets/facitIcons/settings-icon.svg";
import payIcon from "../../Assets/facitIcons/pay-icon.svg";
import upgradeIcon from "../../Assets/facitIcons/upgrade-icon.svg";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
import PersonDummyImage from "../../assetsfacit/img/person-dummy.jpg";
import ellipseNavbar from "../../Assets/facitIcons//ellipse-navbar.svg";
import { removeUserSession } from "../../Utils/Common";
import { getToken } from "../../Utils/Common";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarFacit = forwardRef((props, ref) => {
  const [minimize, setMinimize] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserSession();
    navigate("/login");
  };

  useImperativeHandle(ref, () => ({
    handleSetMinimize(state) {
      setMinimize(state);
    },
  }));

  useEffect(() => {
    if (!minimize) {
      window.document.body.classList.add("overflow-hidden", "lg:overflow-auto");
      return;
    }

    window.document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
  }, [minimize]);

  const handleSetMinimize = (state) => {
    setMinimize(state);
  };

  const [chevronActive, setChevronActive] = useState(null);
  const [active, setActive] = useState('dasbor')

  return (
    <>
      <div className={`hidden bg-transparet lg:block lg:p-4 pr-0 transition-all ${minimize ? "w-20" : "w-[195px]"}`}></div>
      <aside className={`group fixed top-0 bottom-0 left-0 lg:p-4 lg:pr-0 z-[101] h-screen transition-all ${minimize ? "-left-full lg:left-0 w-20 " : "w-[195px]"} ${!getToken() || location.pathname === "/onboarding" ? "hidden" : "flex"}`}>
        <div className={`absolute top-0 left-0 w-screen h-screen lg:hidden bg-black/20 backdrop-blur-sm ${minimize ? "hidden" : ""}`}></div>
        <div
          className={`relative h-full w-full bg-red-main dark:bg-dark-1 text-white lg:rounded-xl z-[100] flex flex-col overflow-hidden transition-all ${minimize ? "items-center group-hover:items-start group-hover:bg-red-main group-hover:backdrop-blur-sm dark:group-hover:bg-dark-1/50" : ""}`}
        >
          {/* Header */}
          <div className={`w-full mb-2 p-3 flex gap-4 items-center ${minimize ? "justify-center" : "justify-between"}`}>
            <img src={zainzoWhiteLogo} className={` ${minimize && "hidden"}`} alt="logo" />
            <button className="rounded-full p-3 hover:bg-hover-sidebar flex items-center justify-center cursor-pointer" onClick={() => handleSetMinimize(!minimize)}>
              <img src={sidebarToggle} alt="toggle-sidebar" className={` ${minimize && "rotate-180 duration-100"} w-4 h-4`} />
            </button>
          </div>
          {/* Menu */}
          <ScrollableContainer>
            <MenuListContainer>
              {/* <MenuHeader>Menu 3</MenuHeader> */}
              <MenuButton icon={dashboardIcon} text={"Dasbor"} iconOnly={minimize} onClick={() => {
                setActive('dasbor')
                navigate("/")
              }} active={active} />
              <div>
                <MenuButton icon={employeeIcon} text={"Karyawan"} iconOnly={minimize}
                  onClick={(e) => {
                    setChevronActive('karyawan')
                  }}
                  chevron={chevronActive === 'karyawan' ? true : false}
                />
                {chevronActive === 'karyawan' &&
                  <div>
                    <button className={`rounded-2xl p-3 ${active === 'data karyawan' && 'bg-hover-sidebar'}  hover:bg-hover-sidebar text-start flex items-center w-full transition-all text-xs text-ellipsis overflow-hidden whitespace-nowrap`} onClick={() => {
                      setActive('data karyawan')
                      navigate("/employees")
                    }}>
                      <div className={`w-5 h-5 flex justify-center items-center ${minimize !== true && "mr-3"}`}>
                        <img src={ellipseNavbar} alt="dot icon" />
                      </div>
                      <div className={`${minimize && "hidden"}`}>
                        Data Karyawan
                      </div>
                    </button>
                    
                  </div>
                }
              </div>
              <div>
                <MenuButton icon={attendanceIcon} text={"Absensi"} iconOnly={minimize} onClick={() =>
                  setChevronActive('absensi')}
                  chevron={chevronActive === 'absensi' ? true : false}
                />
                {chevronActive === 'absensi' &&
                  <div>
                    <button className={`rounded-2xl p-3 ${active === 'kehadiran' && 'bg-hover-sidebar'}    hover:bg-hover-sidebar text-start flex items-center w-full transition-all text-xs text-ellipsis overflow-hidden whitespace-nowrap`} onClick={() => {
                      setActive('kehadiran')
                      navigate("/attendance")
                    }}>
                      <div className={`w-5 h-5 flex justify-center items-center ${minimize !== true && "mr-3"}`}>
                        <img src={ellipseNavbar} alt="dot icon" />
                      </div>
                      <div className={`${minimize && "hidden"}`}>
                        Kehadiran
                      </div>
                    </button>
                    <button className={`rounded-2xl p-3 ${active === 'jadwal' && 'bg-hover-sidebar'}   hover:bg-hover-sidebar text-start flex items-center w-full transition-all text-xs text-ellipsis overflow-hidden whitespace-nowrap`} onClick={() => {
                      setActive('jadwal')
                      navigate("/attendance")
                    }}>
                      <div className={`w-5 h-5 flex justify-center items-center ${minimize !== true && "mr-3"}`}>
                        <img src={ellipseNavbar} alt="dot icon" />
                      </div>
                      <div className={`${minimize && "hidden"}`}>
                        Jadwal
                      </div>
                    </button>
                   
                  </div>
                }
              </div>
              
              <div>
                <MenuButton icon={settingsIcon} text={"Pengaturan"} iconOnly={minimize} onClick={() =>
                  setChevronActive('pengaturan')}
                  chevron={chevronActive === 'pengaturan' ? true : false} />

                {chevronActive === 'pengaturan' &&
                  <div>
                    <button className={`rounded-2xl p-3 ${active === 'perusahaan' && 'bg-hover-sidebar'}  hover:bg-hover-sidebar text-start flex items-center w-full transition-all text-xs text-ellipsis overflow-hidden whitespace-nowrap`} onClick={() => {
                      setActive('perusahaan')
                      navigate('/company')
                    }}>
                      <div className={`w-5 h-5 flex justify-center items-center ${minimize !== true && "mr-3"}`}>
                        <img src={ellipseNavbar} alt="dot icon" />
                      </div>
                      <div className={`${minimize && "hidden"}`}>
                        Perusahaan
                      </div>
                    </button>
                    
                  </div>
                }
              </div>
            </MenuListContainer>
          </ScrollableContainer>
          {/* Footer */}
          <MenuLineDivider />

          <div className={`w-full p-3 px-3 bg-red-main dark:bg-dark-1/70 flex ${minimize ? "justify-center" : ""} items-center cursor-pointer hover:bg-hover-sidebar`}>
            <div className={` ${minimize ? "" : "mr-3"} rounded-full flex items-center justify-center overflow-hidden`}>
              <img src={upgradeIcon} alt="Person" className="w-5 h-5" />
            </div>
            <div className={`flex flex-col justify-center gap-1 ${minimize ? "hidden" : ""}`}>
              <h6 className="text-sm leading-none">Upgrade</h6>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
});

const MenuLineDivider = ({ className = "" }) => {
  return <hr className={` border-t-2 border-border-red w-full ${className}`} />;
};

const ScrollableContainer = ({ children, className = "" }) => {
  return <div className={`overflow-y-scroll scrollbar-hide w-full h-screen text-sm px-3 ${className}`}>{children}</div>;
};

const MenuListContainer = ({ children }) => {
  return <div className="flex flex-col gap-2 ">{children}</div>;
};

const MenuHeader = ({ children }) => {
  return <h6 className="text-xs font-semibold text-[rgba(248,249,250,.6)] px-3">{children}</h6>;
};

const MenuButton = ({ icon, text, iconOnly = false, onClick, chevron, active = null }) => {
  return (
    <button className={`w-full relative ${iconOnly ? "justify-center group-hover:aspect-auto rounded-xl py-3" : "justify-between rounded-2xl p-3"}  ${active === 'dasbor' && 'bg-hover-sidebar'}   hover:bg-hover-sidebar text-start flex items-center transition-all`} onClick={onClick}>
      <img src={icon} alt="menuicon" className={`${!iconOnly && 'mr-3'} w-5 h-5`} />
      <span className={`${iconOnly ? "hidden" : ""} flex-1 text-xs text-ellipsis overflow-hidden whitespace-nowrap`}>{text}</span>
      {text !== 'Dasbor' && <img id="chevron" src={chevronRight} alt="menuicon" className={`${iconOnly && "hidden"} ${chevron === true ? 'rotate-90' : ''} w-3 h-3 transition-all`} />
      }
    </button>
  );
};

export default SidebarFacit;