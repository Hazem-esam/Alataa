import React, { useState } from "react";
import { AiOutlineUser, AiOutlineCaretDown } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <nav className="flex justify-between  bg-[#326e30] pb-2 sticky top-0  z-30">
      <div className="flex ">
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="flex justify-between space-x-2 px-3 py-2 bg-[#0e4a1e] 
      rounded-2xl shadow m-3 text-white cursor-pointer hover:bg-[#0f5221]"
          >
            <AiOutlineCaretDown />
            <AiOutlineUser />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 top-12 bg-white text-black rounded-lg shadow p-2">
              <select className="p-2 border rounded">
                <option value="signup">تسجيل حساب جديد</option>
                <option value="signin">تسجيل الدخول</option>
              </select>
            </div>
          )}
        </div>{" "}
        <div
          className="relative"
          onMouseEnter={() => setCartOpen(true)}
          onMouseLeave={() => setCartOpen(false)}
        >
          <button
            className="flex justify-between space-x-2 px-3 py-2 bg-[#0e4a1e] 
      rounded-2xl shadow m-3 text-white cursor-pointer hover:bg-[#0f5221]"
          >
            <AiOutlineCaretDown />
            <FaShoppingCart />
          </button>

          {cartOpen && (
            <div className="absolute left-0 top-12 bg-white text-black rounded-lg shadow p-2">
              <p className="w-60 text-center">لايوجد تبرعات مضافة في السلة</p>
            </div>
          )}
        </div>
      </div>
      <ul className="flex space-x-3 font-extrabold">
        <li className="shadow px-2 py-2 mt-1 rounded-2xl text-center justify-center items-center hover:scale-105 duration-200 ease-in-out bg-[#0e4a1e] hover:bg-[#0f5221] text-white text-2xl cursor-pointer">
          الرئيسية
        </li>
        <li className="shadow px-2 py-2 mt-1 rounded-2xl text-center justify-center items-center hover:scale-105 duration-200 ease-in-out bg-[#0e4a1e] hover:bg-[#0f5221] text-white text-2xl cursor-pointer">
          عن الجمعية
        </li>
        <li className="shadow px-2 py-2 mt-1 rounded-2xl text-center justify-center items-center hover:scale-105 duration-200 ease-in-out bg-[#0e4a1e] hover:bg-[#0f5221] text-white text-2xl cursor-pointer">
          تواصل معنا
        </li>
        <li className="shadow px-2 py-2 mt-1 rounded-2xl text-center justify-center items-center hover:scale-105 duration-200 ease-in-out bg-[#0e4a1e] hover:bg-[#0f5221] text-white text-2xl cursor-pointer">
          خدماتنا
        </li>
      </ul>
      <img src="logo.png" alt="Logo" className="w-10 h-10 m-3 shadow rounded" />
    </nav>
  );
}

export default Navbar;
