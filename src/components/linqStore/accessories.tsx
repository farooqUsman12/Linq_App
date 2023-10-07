import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import Carousel from '@/layouts/Carousel';

import Access from '../../utils/Images/Accessories/access.png';
import Specify1 from '../../utils/Images/Accessories/specify1.svg';
import Specify2 from '../../utils/Images/Accessories/specify2.png';
import Specify3 from '../../utils/Images/Accessories/specify3.png';
import Specify4 from '../../utils/Images/Accessories/specify4.png';
import Tag from '../../utils/Images/Accessories/tag.png';

const Info = [
  {
    id: '1',
    src: Access,
    link: '/',
  },
  {
    id: '2',
    link: '/',
    src: Specify1,
  },
  {
    id: '3',
    link: '/',
    src: Specify2,
  },
  {
    id: '4',
    link: '/',
    src: Tag,
  },
  {
    id: '5',
    link: '/',
    src: Specify3,
  },
  {
    id: '6',
    link: '/',
    src: Specify4,
  },
];
const Accessories: FC = () => {
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
export default Accessories;
