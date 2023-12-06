import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

const BusinessSection = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <MaxWidthWrapper className="bg-[#F0F3FF] py-16 px-28">
        <div className="flex gap-20">
          <Image
            src={"/Assets/business-image.png"}
            alt="Business Image"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="max-w-lg">
            <h2 className="text-5xl font-semibold leading-normal font-mdsans">
              Tingkatkan skill tim anda.
            </h2>
            <p className="mt-8 text-zinc-600 font-roboto">
              Berikan tim anda pengetahuan, pengalamanan, dan keyakinan yang
              mereka butuhkan untuk mengatasi setiap masalah. Kami ingin
              menciptakan dunia dimana siapapun dapat membangun sesuatu yang
              bermakna
            </p>
            <button className="px-6 py-3 bg-[#3A10E5] text-white rounded font-medium mt-8 font-roboto">
              Try For Business
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BusinessSection;
