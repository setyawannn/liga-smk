"use client";
import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";

const ClassList = [
  { id: 1, title: "Javascript", active: true },
  { id: 2, title: "Phyton", active: false },
  { id: 3, title: "Web Development", active: false },
  { id: 4, title: "Art & Design", active: false },
  { id: 5, title: "Bussiness", active: false },
];

const PictureNumber = [1, 2, 3, 4, 5, 6, 7, 8];

const LearningSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-36">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Pembelajaran populer</h2>
        <div className="flex items-center gap-x-2">
          {ClassList.map((item) => (
            <button
              key={item.id}
              className={`px-6 py-2  text-sm rounded font-semibold duration-200 ${
                item.active
                  ? "shadow-lg text-zinc-900 bg-white hover:shadow-2xl"
                  : " text-zinc-400 hover:text-[#3A10E5]"
              }  `}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-16 grid grid-cols-4 gap-5">
        {PictureNumber.map((item) => (
          <div key={item} className="border">
            <Image
              src={`/Assets/course-${item}.png`}
              alt=""
              width={299}
              height={208}
              className="w-full"
            />
            <div className="mt-6 px-6 py-4 bg-white">
              <span className="text-[#4C26E7] font-semibold">Alen Mask</span>
              <h4 className="text-lg font-semibold">
                Why Learn Intermediate SQL for Marketers?
              </h4>
              <div className="mt-6 flex items-center gap-4 font-medium text-zinc-500 text-sm">
                <span className="flex items-center gap-x-2">
                  <ReactSVG src="/Assets/icon-hamburger.svg" />
                  Beginner
                </span>
                <span className="flex items-center gap-x-2">
                  <ReactSVG src="/Assets/icon-copy.svg" />
                  Beginner
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSection;
