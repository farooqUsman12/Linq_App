import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import Carousel from '@/layouts/Carousel';

import CustomLogo from '../../utils/Images/Print Shop/customLogo.png';
import Deluxe from '../../utils/Images/Print Shop/deluxe.png';
import Elevate from '../../utils/Images/Print Shop/elevate.png';
import FullyCustom from '../../utils/Images/Print Shop/fullyCustom.png';

const Info = [
  {
    id: '1',
    src: Elevate,
    link: '/',
  },
  {
    id: '2',
    link: '/',
    src: FullyCustom,
  },
  {
    id: '3',
    link: '/',
    src: CustomLogo,
  },
  {
    id: '4',
    link: '/',
    src: Deluxe,
  },
];
const PrintShop: FC = () => {
  return (
    <div className="mb-6 mt-9 px-2 md:px-6 xl:px-[92px]">
      <p className="text-left text-[28px] font-medium leading-10 text-[#161B2D]">
        No detail is too small with personalized, QR-powered Taps and more.
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
    </div>
  );
};
export default PrintShop;
