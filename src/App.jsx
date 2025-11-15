import React from "react";
import Navbar from "./components/Navbar";
import imgFooter from "./assets/image.png";
import imgFooterLine from "./assets/imageFooter.png";
import { AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa6";
import NavbarSecondOption from "./components/NavbarSecondOption";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <NavbarSecondOption />
      <main className="grow">
        <div></div>
      </main>
      <footer className="w-full h-auto bg-[#0e4d1d] flex flex-col  items-center space-y-5">
        <img src={imgFooter} alt="" className="w-[75%] h-auto" />
        <p className="text-white text-center w-full">
          نبدع باستدامــــة.... و نعطي بإتقــــان
        </p>
        <ul className="flex flex-col items-center text-white font-semibold space-y-1">
          <li className="hover:text-gray-300 cursor-pointer flex items-center space-x-2">
            <a
              href="https://www.google.com/maps?q=Mecca,+Saudi+Arabia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaMapPin className="text-black text-xl" />:
              <span>مكة المكرمة - المملكة العربية السعودية</span>
            </a>
          </li>

          <li className="hover:text-gray-300 cursor-pointer flex items-center space-x-2">
            <AiFillMail className="text-black text-xl" />:
            <a
              href="mailto:istidama.alataa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              istidama.alataa@gmail.com
            </a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center space-x-2">
            <AiOutlineWhatsApp className="text-green-500 text-xl" />:
            <a
              href="https://wa.me/966575857077"
              target="_blank"
              rel="noopener noreferrer"
            >
              +966 57 585 7077
            </a>
          </li>
        </ul>
        <img src={imgFooterLine} alt="" className="w-[75%] mt-5" />
      </footer>
    </div>
  );
}

export default App;
