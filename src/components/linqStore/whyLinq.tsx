import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import React from "react";

import Carousel from "@/layouts/Carousel";

import Item1 from "../../utils/Images/Why Linq/1.svg";
import Item2 from "../../utils/Images/Why Linq/2.svg";
import Item3 from "../../utils/Images/Why Linq/3.svg";
import Item4 from "../../utils/Images/Why Linq/4.svg";
import Item5 from "../../utils/Images/Why Linq/5.svg";

export const Info = [
  {
    id: "1",
    text: "Customize and create your own style of Linq products",
    src: Item1,
  },
  {
    id: "2",
    src: Item2,
    text: "Custom products fulfilled in 2 business days",
  },
  {
    id: "3",
    text: "Hands-on guidance from in-house experts",
    src: Item3,
  },
  {
    id: "4",
    text: "Compatible with iOS and Android",
    extraText: "Visit our devices page",
    src: Item4,
  },
  {
    id: "5",
    text: "Bulk order discount (15% - 60% off)",
    src: Item5,
  },
];
const WhyLinq: FC = () => {
  return (
    <div className="mb-6 ml-auto mt-12 w-full lg:max-w-7xl">
      <div className="">
        {" "}
        <Carousel>
          {Info.map((data: any) => (
            <div
              key={data.id}
              className=" carousel-item h-[240px] w-[310px] border justify-center mr-6 rounded-lg "
            >
              <Image
                src={data.src}
                height={100}
                width={100}
                alt=""
                className="pl-9 pt-8"
              />
              <p className="ml-9 w-[244px] text-2xl font-normal ">
                {data.text}
              </p>
              {data.extraText && (
                <div className="ml-9 mt-[36px] text-[#006DFF]">
                  <Link href="/">{data.extraText}</Link>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default WhyLinq;
