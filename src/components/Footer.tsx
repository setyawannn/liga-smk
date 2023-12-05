"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#090E23]">
      <MaxWidthWrapper className="grid grid-cols-5 gap-12 pt-20">
        <div className="col-span-2">
          <Image
            src={"/Assets/logo-ligasmk-white.png"}
            alt="Logo Liga SMK Light"
            width={142}
            height={36}
          />
          <p className="text-zinc-400 mt-8 leading-relaxed">
            Mengubah kehidupan, bisnis, dan bangsa melalui transformasi talenta
            di bidang teknologi digital
          </p>
          <div className="flex gap-8 mt-12 px-4">
            <ReactSVG src="/Assets/icon-facebook-white.svg" />
            <ReactSVG src="/Assets/icon-twitter-white.svg" />
            <ReactSVG src="/Assets/icon-linkedin-white.svg" />
            <ReactSVG src="/Assets/icon-youtube-white.svg" />
          </div>
        </div>
        <div className="">
          <h4 className="text-zinc-200 font-semibold text-2xl">Resources</h4>

          <div className="flex flex-col gap-6 text-zinc-400 mt-8">
            <Link href={"/"}>Build Career</Link>
            <Link href={"/"}>Explore Subject</Link>
            <Link href={"/"}>Gain a Skill</Link>
          </div>
        </div>
        <div className="">
          <h4 className="text-zinc-200 font-semibold text-2xl">Support</h4>

          <div className="flex flex-col gap-6 text-zinc-400 mt-8">
            <Link href={"/"}>Web Development</Link>
            <Link href={"/"}>Data Science</Link>
            <Link href={"/"}>Machine Learning</Link>
            <Link href={"/"}>Developer Tools</Link>
            <Link href={"/"}>Web Design</Link>
          </div>
        </div>
        <div className="">
          <h4 className="text-zinc-200 font-semibold text-2xl">Download Now</h4>

          <div className="flex flex-col gap-6 mt-8">
            <div>
              <Image
                src={"/Assets/logo-appstore.png"}
                alt="Apple Logo"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
