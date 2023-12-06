"use client";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import React from "react";
import { ReactSVG } from "react-svg";

const FeaturesList = [
  {
    id: 1,
    title: "Kuasai Skill Baru",
    desc: "Fokus apa yang dibutuhkan",
    icon: "icon-online-education.svg",
  },
  {
    id: 2,
    title: "Cari Materi Belajar",
    desc: "Seberapa pengetahuan kamu",
    icon: "icon-globe-handphone.svg",
  },
  {
    id: 3,
    title: "Membangun Karir",
    desc: "Semua yang butuh kerja",
    icon: "icon-online-education-laptop.svg",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#FACB3B]">
      <MaxWidthWrapper className="py-16 flex items-center justify-between">
        {FeaturesList.map((item) => (
          <div key={item.id} className="flex items-center gap-6">
            <ReactSVG src={`/Assets/${item.icon}`} />
            <div className="font-roboto">
              <h4 className="text-xl font-bold text-zinc-900">
                Kuasai Skill Baru
              </h4>
              <p className="text-base font-medium text-zinc-700">
                Fokus apa yang dibutuhkan
              </p>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default FeaturesSection;
