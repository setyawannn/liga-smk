"use client";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";

const CategoryList = [
  { id: 1, title: "Kimia", icon: "icon-chemical.svg" },
  { id: 2, title: "Management", icon: "icon-calendar.svg" },
  { id: 3, title: "Seni Budaya", icon: "icon-pencil-ruler.svg" },
  { id: 4, title: "Bisnis", icon: "icon-briefcase.svg" },
  { id: 5, title: "Astropologi", icon: "icon-science.svg" },
  { id: 6, title: "SEO", icon: "icon-microscope.svg" },
  { id: 7, title: "Kosmologi", icon: "icon-space.svg" },
  { id: 8, title: "Biologi", icon: "icon-microscope.svg" },
];

const CategorySection = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <MaxWidthWrapper className="py-36 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center font-mdsans">
          Kategori populer
        </h2>
        <div className="grid grid-cols-4 mt-16 gap-4 font-roboto">
          {CategoryList.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white rounded-md p-4"
            >
              <div className="bg-[#F0F3FF] rounded-full w-20 h-20 flex justify-center items-center">
                <ReactSVG src={`/Assets/${item.icon}`} />
              </div>
              <div>
                <h5 className="font-semibold text-xl text-zinc-900">
                  {item.title}
                </h5>
                <span className="text-sm text-zinc-600 font-medium">
                  2 Kelas
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href={"/"}
            className="flex items-center justify-center gap-2 text-[#4C26E7] font-medium duration-200 hover:gap-6"
          >
            Explore All Courses <ReactSVG src="/Assets/icon-double-next.svg" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CategorySection;
