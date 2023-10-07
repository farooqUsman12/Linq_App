import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import type { FC } from "react";
import React from "react";

import Carousel from "@/layouts/Carousel";

import Linq1 from "../../utils/Images/Stand Out/LINQ1.svg";
import Linq2 from "../../utils/Images/Stand Out/LINQ2.svg";
import Linq3 from "../../utils/Images/Stand Out/LINQ3.svg";
import Wearables from "../../utils/Images/Stand Out/wearables.svg";

export const Info = [
  {
    id: "1",
    src: Wearables,
    link: "/",
  },
  {
    id: "2",
    link: "/",
    src: Linq1,
  },
  {
    id: "3",
    link: "/",
    src: Linq2,
  },
  {
    id: "4",
    link: "/",
    src: Linq3,
  },
  {
    id: "1",
    src: Wearables,
    link: "/",
  },
  {
    id: "2",
    link: "/",
    src: Linq1,
  },
  {
    id: "3",
    link: "/",
    src: Linq2,
  },
];
const StandOut: FC = () => {
  return (
    <div className="mb-6 mt-9">
      <div className="flex justify-between mx-auto mt-12 w-full lg:max-w-7xl">
        <p className="text-left text-[28px] font-medium leading-10 text-[#161B2D]">
          The easiest way to stand out from the crowd.
        </p>
      </div>
      <Carousel width={550}>
        {Info.map((data: any) => (
          <div key={data.id} className=" carousel-item mt-6  justify-center">
            <a href={data.link}>
              <Image
                src={data.src}
                height={500}
                width={310}
                alt=""
                // className="h-[500px] w-[310px]"
              />
            </a>
          </div>
        ))}
      </Carousel>
      <div className="mx-auto mt-12 w-full lg:max-w-[1550px]">
        <p className="ml-10 text-[28px] font-medium text-[#161B2D]">
          Why Linq?
        </p>
      </div>
    </div>
  );
};
export default StandOut;
