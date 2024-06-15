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
      <BsWhatsapp className="w-[60px] h-[60px]  text-green-500" />
    </a>
  );
};

export default Whatsapp;
