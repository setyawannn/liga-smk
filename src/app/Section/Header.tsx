import Button from "@/Components/Reusable/Button";
import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";

const HeaderSection = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 flex items-center">
      <div className="w-1/2">
        <h1 className="text-5xl max-w-md leading-snug font-semibold text-zinc-900">
          Bergabunglah dengan jutaan orang dan belajar hal baru
        </h1>
        <p className="mt-6 leading-loose text-base text-zinc-700 font-medium">
          Mengubah kehidupan, bisnis, dan bangsa melalui transformasi talenta di
          bidang teknologi digital
        </p>
        <Button className="mt-8">Mulai Belajar</Button>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          src={"/Assets/shape-diagram.png"}
          alt=""
          width={388}
          height={100}
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default HeaderSection;
