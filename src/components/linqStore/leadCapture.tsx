import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import Carousel from '@/layouts/Carousel';

import HubMiniWhite from '../../utils/Images/LeadCapture/customize.svg';
import HubMini from '../../utils/Images/LeadCapture/hubMini.svg';
import StandOut from '../../utils/Images/LeadCapture/standOut.png';

export const Info = [
  {
    id: '1',
    src: StandOut,
    link: '/',
  },
  {
    id: '2',
    link: '/',
    src: HubMiniWhite,
  },
  {
    id: '3',
    link: '/',
    src: HubMini,
  },
  {
    id: '4',
    link: '/',
    src: HubMiniWhite,
  },
];
const LeadCapture: FC = () => {
  return (
    <div className="mb-6 mt-9 px-2 md:px-6 xl:px-[92px]">
      <p className="text-left text-[28px] font-medium leading-10 text-[#161B2D]">
        Lead Capture. Upgrade your lead gen game with fully-branded, one-tap
        tools.
      </p>
      <Carousel>
        {Info.map((data: any) => (
          <div
            key={data.id}
            className=" carousel-item mt-6 w-[33%] justify-center"
          >
            <a href={data.link}>
              <Image
                src={data.src}
                height={100}
                width={100}
                alt=""
                className="h-[500px] w-full border"
              />
            </a>
          </div>
        ))}
      </Carousel>
      <p className="ml-10 text-[28px] font-medium text-[#161B2D]">Why Linq?</p>
    </div>
  );
};
export default LeadCapture;
