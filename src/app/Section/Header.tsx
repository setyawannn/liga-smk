import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Button from "@/Components/Reusable/Button";
import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";

const HeaderSection = () => {
  return (
    <MaxWidthWrapper className="py-20 mb-16 flex items-center">
      <div className="w-1/2">
        <h1 className="text-5xl max-w-md leading-snug font-bold text-zinc-900 font-mdsans">
          Bergabunglah dengan jutaan orang dan belajar hal baru
        </h1>
        <p className="mt-6 leading-loose text-base text-zinc-500 font-medium max-w-sm font-roboto">
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
    </MaxWidthWrapper>
  );
};

export default HeaderSection;
