import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import Carousel from '@/layouts/Carousel';

import Blog from '../../utils/Images/Help/Blog.svg';
import Education from '../../utils/Images/Help/Education.svg';
import Guide from '../../utils/Images/Help/Guide.png';
import Screen from '../../utils/Images/Help/screen.svg';

export const Info = [
  {
    id: '1',
    src: Screen,
  },
  {
    id: '2',
    src: Blog,
  },
  {
    id: '3',
    src: Guide,
  },
  {
    id: '4',
    src: Education,
  },
];
const WhyLinq: FC = () => {
  return (
    <div className="mb-6 px-2 md:px-6 xl:px-[92px]">
      <p className="text-[28px] font-normal">
        Help is here. Whenever and however you need it.
      </p>
      <Carousel>
        {Info.map((data: any) => (
          <div key={data.id} className="carousel-item w-[33%] justify-center">
            <Image
              src={data.src}
              height={100}
              width={100}
              alt=""
              className="h-[400px] w-full border"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default WhyLinq;
