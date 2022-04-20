import { TeliaP } from "@teliads/components/react";
import React, { FC } from "react";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

const Navbar: FC = () => {
  return (
    <header className="telia-navbar">
      <div className="col-2">
        <Logo />
      </div>
      <div className="col-8"></div>
      <div className="col-2 col-2--right">
        <TeliaP variant="paragraph-100">Voca Design System</TeliaP>
      </div>
    </header>
  );
};

export default Navbar;
