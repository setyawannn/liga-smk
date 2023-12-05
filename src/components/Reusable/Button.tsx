"use client";
import React from "react";
import { ReactSVG } from "react-svg";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button = ({ children, className, icon }: ButtonProps) => {
  return (
    <button
      className={`${className} bg-[#3A10E5] text-white px-6 py-3 rounded font-semibold flex gap-x-12 items-center hover:opacity-90 duration-200 hover:gap-x-6`}
    >
      {children} <ReactSVG src="/Assets/icon-arrowlong-right.svg" />
    </button>
  );
};

export default Button;
