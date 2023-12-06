import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Button from "@/Components/Reusable/Button";
import Image from "next/image";
import React from "react";

const PromoSection = () => {
  return (
    <div className="bg-[#FFF0E5]">
      <MaxWidthWrapper className="flex py-12 items-center justify-between">
        <div className=" flex justify-center">
          <Image
            src={"/Assets/membership-image.png"}
            alt=""
            width={237}
            height={237}
            className="w-10/12"
          />
        </div>
        <div className="">
          <h2 className="text-4xl font-bold text-zinc-900 max-w-lg mx-auto flex justify-center font-mdsans">
            Dapatkan Membership Pro GRATIS untuk kelas kamu.
          </h2>
        </div>
        <div className=" ">
          <button className="px-6 py-3 bg-[#3A10E5] text-white rounded font-medium font-roboto">
            Lihat semua kelas
          </button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PromoSection;
