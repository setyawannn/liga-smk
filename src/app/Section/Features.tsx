"use client";
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
      <div className="max-w-5xl py-16 mx-auto flex items-center justify-between">
        {FeaturesList.map((item) => (
          <div key={item.id} className="flex items-center gap-6">
            <ReactSVG src={`/Assets/${item.icon}`} />
            <div>
              <h4 className="text-xl font-bold text-zinc-900">
                Kuasai Skill Baru
              </h4>
              <p className="text-base font-medium text-zinc-800 mt-1">
                Fokus apa yang dibutuhkan
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
