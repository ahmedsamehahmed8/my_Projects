import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <>
      <div className="border w-auto flex items-center justify-between p-5 ">
        <div className="fon">logo</div>
        <div className="">
          <div className=" relative flex justify-center items-center w-7 h-7 rounded-full top-1 -left-3  bg-slate-600 ">
            22
          </div>
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </div>
      </div>
    </>
  );
}

export default Header;
