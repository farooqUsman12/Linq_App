import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import React from 'react';

import { Info } from '@/components/store/collection-nav-info';
import Carousel from '@/layouts/Carousel';

const ProductsSlider = () => {
  return (
    <div className="ml-auto">
      <Carousel>
        {Info.map((_data: any) => (
          <div
            key={_data.id}
            className=" carousel-item w-[140px] justify-center lg:w-[190px] xl:w-[215px]"
          >
            <a href={_data.link} className="flex flex-col items-center">
              <Image src={_data.src} height={100} width={100} alt="" />
              <p className="mt-2 font-OutfitMedium text-sm text-black">
                {_data.name}
              </p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsSlider;
