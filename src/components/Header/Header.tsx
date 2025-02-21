import React, { useState } from "react";
import logo from "../../assets/it-vub.svg";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import AuthModal from "../../features/AuthModal/AuthModal";
import AboutModal from "../../features/AboutModal/AboutModal";

function Header() {
  const [showModal, setShowModal] = useState<string | null>(null);
  return (
    <div className="w-full flex flex-row justify-between content-center items-center px-10 py-5">
      <NavLink to="/">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <ul className="flex flex-row gap-x-6 justify-center items-center cursor-pointer">
        <NavLink to="/courses">
          <li>Курсы</li>
        </NavLink>
        <NavLink to="/news">
          <li>Новости</li>
        </NavLink>
        <li
          onClick={() => {
            setShowModal("about");
          }}
        >
          О нас
        </li>
        <Button
          onClick={() => setShowModal("auth")}
          color="primary"
          variant="solid"
          type="primary"
        >
          Войти
        </Button>
      </ul>
      <AuthModal showModal={showModal} setShowModal={setShowModal} />
      <AboutModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Header;
