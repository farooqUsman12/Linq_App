import Image from "next/image";
import type { FC } from "react";
import React from "react";

import Card from "../../utils/Images/Why Linq/card.svg";
import Frame from "../../utils/Images/Why Linq/Frame.svg";
import Hub from "../../utils/Images/Why Linq/Hub.svg";
import Tap from "../../utils/Images/Why Linq/tap.svg";

const CustomDesign: FC = () => {
  return (
    <div className="mb-11 bg-gradient-to-b from-[#006DFF] to-[#7E46C5]">
      <div className="mx-auto mt-12 w-full lg:max-w-7xl">
        <div className="mb-2 flex flex-col items-center justify-center text-center">
          <p className="text-center text-base text-white">
            Make It Yours with Industry-Leading Customization
          </p>
          <p className=" w-[450px] text-center text-[28px] font-normal text-white">
            Upgrade your lead gen game with fully-branded, one-tap tools.
          </p>
        </div>
        <div className="mx-auto flex items-center justify-center ">
          <Image src={Tap} alt="tap" />
          <div className="relative">
            <Image className="relative" src={Card} alt="card" />
            <Image
              className="absolute left-2/4 top-2/4 mt-[80px] -translate-x-1/2 -translate-y-1/2 p-4"
              src={Frame}
              alt="frame"
            />
          </div>
          <Image src={Hub} alt="hub" />
        </div>
      </div>
    </div>
  );
};
export default CustomDesign;
