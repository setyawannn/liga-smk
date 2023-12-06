"use client";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";

const PictureList = [1, 2, 3];

const EventSection = () => {
  return (
    <div className="bg-[#F7F7F7] py-32">
      <MaxWidthWrapper>
        <h2 className="text-3xl font-bold text-center font-mdsans">
          Event sedang berlangsung di dekatmu
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {PictureList.map((item) => (
            <div key={item} className="mt-16 font-roboto">
              <Image
                src={`/Assets/event-${item}.png`}
                alt="Event 1"
                width={411}
                height={288}
              />
              <div className="mt-8 flex gap-4">
                <div className="flex justify-center flex-col items-center">
                  <h5 className="font-semibold text-3xl text-[#4C26E7]">21</h5>
                  <span className="font-medium text-zinc-800">March</span>
                </div>
                <div className="h-14 border-[1.5px] border-zinc-300">{""}</div>
                <div className="flex items-center gap-4 justify-center">
                  <ReactSVG src="/Assets/icon-location.svg" />
                  <p>North Caroline United States</p>
                </div>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-zinc-900">
                Linear Regression in Phyton: Introduction to Simple Linear
              </h3>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default EventSection;
