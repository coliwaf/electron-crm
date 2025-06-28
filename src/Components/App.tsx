import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
// import logoIcon from '../assets/images/';
// import { logoIcon } from './assets/';
import { SiAcademia } from "react-icons/si";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import {
  FcFactory,
  FcPackage,
  FcBusinessman,
  FcDoughnutChart,
  FcFrame,
  FcShop,
  FcServices,
  FcExpand
} from "react-icons/fc";

function Homepage() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    {
      title: "Inventory",
      icon: <FcPackage />,
      spacing: true,
      submenu: true,
      subMenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 1" },
        { title: "Submenu 1" },
        { title: "Submenu 1" },
      ],
    },
    {
      title: "Production",
      icon: <FcFactory />,
    },
    { title: "Workers", icon: <FcBusinessman /> },
    { title: "Sales", icon: <FcDoughnutChart /> },
    { title: "Products", icon: <FcFrame /> },
    { title: "E-commerce", icon: <FcShop /> },
    { title: "Settings", icon: <FcServices /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-primary-green h-screen p-5 pt-8 ${open ? "w-72" : "w-20"
          } duration-400`}
      >
        {/* <img src={logoIcon} alt="Abrit-logo" /> */}

        <div className="inline-flex">
          <SiAcademia
            className="bg-amber-300 text-3xl text-primary-green rounded cursor-pointer mr-2 duration-400"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`origin-left font-medium text-2xl ${!open && "scale-0"
              } `}
          >
            Company
          </div>
        </div>

        <div
          className={`flex items-center rounded-md bg-white-light mt-6 ${!open ? "px-2.5" : "px-4"
            } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"
              }`}
          />

          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"
              }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white-light rounded-md ${menu.spacing ? "mt-9" : "mt-2"
                  }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardHorizontalFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${!open && "hidden"
                    } duration-200`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <FcExpand
                    className={`${subMenuOpen && "rotate-180"}`}
                    onClick={() => setSubmenuOpen(!subMenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && subMenuOpen && open && (
                <ul>
                  {menu.subMenuItems.map((subMenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white-light rounded-md"
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <AiOutlineMenu
          className="bg-white text-primary-green text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <h1 className="font-bold text-2xl underline text-red-700">
          Hello react
        </h1>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
