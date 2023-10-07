import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import Carousel from '@/layouts/Carousel';

import Arrow from '../../utils/Images/Enterprise Ready/arrow-forward-outline.svg';
import Automobile from '../../utils/Images/Enterprise Ready/automobile.png';
import Recruiting from '../../utils/Images/Enterprise Ready/caseStudy.png';
import Teams from '../../utils/Images/Enterprise Ready/linqForTeams.svg';
import RealEstate from '../../utils/Images/Enterprise Ready/realEstate.png';

const Info = [
  {
    id: '1',
    text1: 'linq for Teams',
    text1Style: 'text-[#E5E5E5]',
    text2: 'Powerful sales tools that grow and scale with your team.',
    src1: Teams,
    link: '/',
  },
  {
    id: '2',
    text1: 'Case Study',
    text2: 'How our client use Linq in Recruiting',
    src1: Recruiting,
    colors: true,
    link: '/',
  },
  {
    id: '3',
    text1: 'Case Study',
    text2: 'How our client use Linq in Real estate',
    src1: RealEstate,
    link: '/',
  },
  {
    id: '4',
    text1: 'Case Study',
    text2: 'How our client use Linq in Automobile',
    src1: Automobile,
    link: '/',
  },
];
const BestSelling: FC = () => {
  return (
    <div className="my-10 px-2 md:px-6 xl:px-[92px]">
      <p className="text-left text-[28px] font-medium leading-10 text-[#161B2D]">
        Enterprise ready. Do even more with Linq products and services.
      </p>
      <Carousel>
        {Info.map((data: any) => (
          <div
            key={data.id}
            className="carousel-item w-[33%] justify-center border"
          >
            <a href={data.link}>
              <div>
                <p className={`${data.text1Style}`}>{data.text1}</p>
                <p className="text-2xl ">{data.text2}</p>
                <div className="flex">
                  <Link href="/">Learn More</Link>
                  <Image className="bg-black" src={Arrow} alt="arrow" />
                </div>
              </div>
              <div className="relative">
                <Image
                  src={data.src1}
                  alt=""
                  className="relative h-[400px] w-full"
                />
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default BestSelling;
