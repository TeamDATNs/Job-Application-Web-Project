import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
import MenuItem from "./MenuItem";
import { Outlet } from "react-router-dom";

import HeaderPageCompany from "./HeaderPageCompany";

function CompanyView() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleDashboard = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleMenu = () => {
    setIsOpenMenu((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="flex ">
      <div
        className={` bg-slate-700 flex flex-col items-center justify-start `}
      >
        <div
          className={`flex items-center ${
            isOpen ? "justify-end" : "justify-center"
          } w-full px-3 text-3xl cursor-pointer `}
          onClick={toggleDashboard}
        >
          {isOpen ? (
            <BsLayoutSidebarInsetReverse className="text-white" />
          ) : (
            <BsLayoutSidebarInset className="text-white" />
          )}
        </div>

        <MenuItem open={isOpen} />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 1 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transition: "width 0.6s ease-out" }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full h-screen ">
        <HeaderPageCompany toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
        <div className="flex items-center justify-center pt-2">
          <div className="w-[98%]  p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyView;
