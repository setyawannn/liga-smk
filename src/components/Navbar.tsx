"use client";
import Link from "next/link";
import React from "react";
import ArrowBottom from "../Assets/icon-arrow-bottom.svg";
import { ReactSVG } from "react-svg";
import Image from "next/image";

const NavbarList = [
  { id: 1, title: "Home", path: "/", dropdown: true },
  { id: 2, title: "About Us", path: "/", dropdown: true },
  { id: 3, title: "Blog", path: "/", dropdown: true },
  { id: 4, title: "Kontak", path: "/" },
];

const Navbar = () => {
  return (
    <div className="bg-white py-6">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <div>
          <Image
            src={"/Assets/logo-ligasmk-dark.png"}
            alt="Logo Liga SMK"
            width={120}
            height={120}
            quality={100}
          />
        </div>
        <div className="flex gap-8">
          {NavbarList.map((item) => (
            <Link
              key={item.id}
              href={"/"}
              className="flex items-center gap-x-3 font-medium text-zinc-900"
            >
              {item.title}{" "}
              {item.dropdown ? (
                <ReactSVG src="/Assets/icon-arrow-bottom.svg" />
              ) : (
                ""
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
