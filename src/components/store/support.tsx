import React from 'react';

import Carousel from '@/layouts/Carousel';
import BlogImage from '@/public/images/Blog.svg';
import EdcationIcon from '@/public/images/Education.svg';
import UserGuideImage from '@/public/images/Guide.jpg';
import SupportBg from '@/public/images/SupportBg.svg';

const sliderData = [
  {
    id: '1',
    image: SupportBg,
    alt: 'Support',
    link: 'https://linqapp.com/support',
    h1: 'Support',
    p1: 'Have more questions? ',
    p2: 'Our specialists are here to help.',
  },
  {
    id: '2',
    image: BlogImage,
    alt: 'BlogImage',
    link: 'https://buy.linqapp.com/blogs/news/un-masking-the-magic-of-nfc-business-cards',
    h1: 'Blog',
    p1: 'What is NFC technology?',
    p2: 'Read our guide.',
  },
  {
    id: '3',
    image: UserGuideImage,
    alt: 'UserGuideImage',
    link: 'https://linqapp.com/support',
    h1: 'User Guide',
    p1: 'Learn how to activate ',
    p2: 'your Linq products',
  },
  {
    id: '4',
    image: EdcationIcon,
    alt: 'EdcationIcon',
    link: 'https://linqapp.com/education',
    h1: 'Education',
    p1: 'Linq for Teams',
    p2: 'education resources',
  },
];

const InfoLinksSlider = () => {
  return (
    <div className="customSliderBox mt-4 sm:mt-11">
      <h3 className="mb-7 px-2 text-center font-OutfitMedium text-xl text-black sm:mb-11 sm:text-3xl">
        Help is here. <br className="block sm:hidden" /> Whenever and however
        you need it.
      </h3>
      <div className="ml-auto">
        <Carousel sliderData={sliderData}>
          {sliderData.map((slider, index) => (
            <div
              key={slider.id}
              className=" carousel-item  flex flex-col justify-center rounded-2xl"
            >
              <a
                href={slider.link}
                className="infoLinksSlider h-[320px] w-[277px] rounded-2xl bg-cover bg-center bg-no-repeat md:h-[400px] md:w-[400px]"
                style={{ backgroundImage: ` url(${slider.image.src} )` }}
              >
                <div className="p-8 ">
                  <p
                    className={`mb-4 font-NunitoSemiBold text-sm ${
                      index === 2 ? 'text-black' : 'text-white'
                    } `}
                  >
                    {slider.h1}
                  </p>
                  <div
                    className={`font-OutfitMedium text-sm leading-normal tracking-normal sm:text-base md:text-lg lg:text-2xl ${
                      index === 2 ? 'text-black' : 'text-white'
                    }`}
                  >
                    <p>{slider.p1}</p>
                    <p>{slider.p2}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InfoLinksSlider;
