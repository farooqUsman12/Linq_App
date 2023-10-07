import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import type { FC } from "react";
import React from "react";

import Carousel from "@/layouts/Carousel";

import Badge from "../../utils/Images/Best Selling/Badge.svg";
import BundleCard from "../../utils/Images/Best Selling/bundleCard.svg";
import LinqCard from "../../utils/Images/Best Selling/linqCard.svg";
import Metal from "../../utils/Images/Best Selling/metal.png";
import NFC from "../../utils/Images/Best Selling/nfcCard.svg";
import Plus from "../../utils/Images/Best Selling/plus.svg";
import RectangleBlack from "../../utils/Images/Best Selling/RectangleBlack.svg";
import RectangleBlue from "../../utils/Images/Best Selling/RectangleBlue.svg";
import RectangleRed from "../../utils/Images/Best Selling/RectangleRed.svg";
import RectangleWhite from "../../utils/Images/Best Selling/RectangleWhite.svg";
import RectangleYellow from "../../utils/Images/Best Selling/RectangleYellow.svg";
import Stretch from "../../utils/Images/Best Selling/strech.png";

const Info = [
  {
    id: "1",
    text1: "Smart cards",
    text1Style: "text-[#E5E5E5]",
    text2: "Eco-friendly NFC Digital business card",
    text2Style: "text-[#E5E5E5]",
    text3: "Learn More about NFC card",
    text3Style: "text-[#E5E5E5]",
    src1: NFC,
    link: "/",
  },
  {
    id: "2",
    text1: "Customize it",
    text1Style: "text-[#006DFF]",
    text2: "Linq Card - Fully Custom",
    text2Style: "",
    text3: "From $11.99",
    text3Style: "",
    src1: LinqCard,
    colors: true,
    link: "/",
  },
  {
    id: "3",
    text1: "Bundle",
    text1Style: "",
    text2: "Save on Bundle color",
    text2Style: "",
    text3: "From $23.99 Save up to 25%",
    text3Style: "",
    src1: BundleCard,
    link: "/",
  },
  {
    id: "4",
    text1: "Customize it",
    text1Style: "",
    text2: "Linq Badge",
    text2Style: "",
    text3: "From $34.99",
    text3Style: "",
    src1: Badge,
    link: "/",
  },
  {
    id: "5",
    text1: "Wearable",
    text1Style: "",
    text2: "Linq Stretch V2",
    text2Style: "",
    text3: "$19.99",
    text3Style: "",
    src1: Stretch,
    link: "/",
  },
  {
    id: "6",
    text1: "Customize it",
    text1Style: "",
    text2: "Linq Card Engraved Metal",
    text2Style: "",
    text3: "$99.99",
    text3Style: "",
    link: "/",
    src1: Metal,
  },
];
const BestSelling: FC = () => {
  return (
    <div className="mx-auto mt-12 w-full ">
      <div className="">
        <div className="mx-auto mt-12 w-full lg:max-w-7xl">
          <p className="text-left text-[28px] font-medium leading-10 text-[#161B2D]">
            Our best-selling products
          </p>
        </div>
        <div className="mt-10 ml-auto max-w-[1520px]">
          <div className="ml-auto">
            <Carousel width={550}>
              {Info.map((data: any) => (
                <div
                  key={data.id}
                  className="carousel-item w-[33%] justify-center mr-6 "
                >
                  <a href={data.link}>
                    {/* <div>
                     
                    </div> */}
                    <div className="relative rounded-lg ">
                      <div className="absolute z-20 px-[53px] py-10">
                        <p className={`${data.text1Style}`}>{data.text1}</p>
                        <p className={`${data.text2Style} font-bold text-2xl`}>{data.text2}</p>
                        <p className={`${data.text3Style}`}>{data.text3}</p>
                      </div>
                      <Image
                        src={data.src1}
                        alt=""
                        className=" relative h-[550px] rounded-lg w-[500px] object-cover"
                      />
                    </div>
                  </a>
                  {data.colors ? (
                    <div className="flex content-center items-center justify-center gap-2">
                      <Image
                        src={RectangleWhite}
                        alt="white"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => {
                          console.log("white");
                        }}
                      />
                      <Image
                        src={RectangleBlack}
                        alt="black"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => {
                          console.log("black");
                        }}
                      />
                      <Image
                        src={RectangleBlue}
                        alt="blue"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => {
                          console.log("blue");
                        }}
                      />
                      <Image
                        src={RectangleRed}
                        alt="red"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => {
                          console.log("red");
                        }}
                      />
                      <Image
                        src={RectangleYellow}
                        alt="yellow"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => {
                          console.log("yellow");
                        }}
                      />
                      <Image
                        src={Plus}
                        alt="yellow"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => {
                          console.log("plus");
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSelling;
