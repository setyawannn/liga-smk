import Link from "next/link";
import React from "react";
import ArrowBottom from "../../public/assets/icon-arrow-bottom.svg";

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between py-6">
        <div>
          <h1>Liga SMK</h1>
        </div>
        <div className="flex gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Kelas</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Kontak</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
