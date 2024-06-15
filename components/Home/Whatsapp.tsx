import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GrWhatsapp } from "react-icons/gr";
const Whatsapp = () => {
  return (
    <a
      className="fixed bottom-3 right-4"
      href="https://wa.me/8101006314"
      target="_blank"
    >
      <BsWhatsapp className="w-[55px] h-[55px]  text-green-500" />
    </a>
  );
};

export default Whatsapp;
