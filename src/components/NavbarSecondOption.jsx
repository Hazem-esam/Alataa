import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineCaretDown,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

function NavbarSecondOption() {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["الرئيسية", "عن الجمعية", "خدماتنا", "تواصل معنا"];

  return (
    <nav className="bg-[#326e30] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <ul className="hidden md:flex gap-4 rtl">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="px-5 py-2 rounded-2xl bg-[#0e4a1e] text-white font-semibold text-lg hover:bg-[#0f5221] transition transform hover:scale-105 cursor-pointer text-center"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden flex items-center justify-center p-2 text-white hover:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
          <div
            className="relative"
            onMouseEnter={() => setUserDropdownOpen(true)}
            onMouseLeave={() => setUserDropdownOpen(false)}
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0e4a1e] rounded-2xl text-white hover:bg-[#0f5221] shadow transition">
              <AiOutlineUser className="text-xl" />
              <AiOutlineCaretDown className="text-xl" />
            </button>
            {userDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow p-2 rtl">
                <select className="w-full p-2 border rounded">
                  <option value="signup">تسجيل حساب جديد</option>
                  <option value="signin">تسجيل الدخول</option>
                </select>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setCartDropdownOpen(true)}
            onMouseLeave={() => setCartDropdownOpen(false)}
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0e4a1e] rounded-2xl text-white hover:bg-[#0f5221] shadow transition">
              <FaShoppingCart className="text-xl" />
              <AiOutlineCaretDown className="text-xl" />
            </button>
            {cartDropdownOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-lg shadow p-3 rtl">
                <p className="text-center">لا يوجد تبرعات مضافة في السلة</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-2xl shadow"
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e4a1e] px-6 py-4 rtl flex flex-col gap-3">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-2 rounded-2xl bg-[#0f5221] text-white font-semibold text-lg hover:bg-[#0e4a1e] transition cursor-pointer text-center"
            >
              {item}
            </li>
          ))}
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex justify-between items-center bg-[#0f5221] rounded-2xl p-2 cursor-pointer">
              <span className="text-white">الحساب</span>
              <AiOutlineUser className="text-white text-xl" />
            </div>
            <div className="flex justify-between items-center bg-[#0f5221] rounded-2xl p-2 cursor-pointer">
              <span className="text-white">السلة</span>
              <FaShoppingCart className="text-white text-xl" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarSecondOption;
