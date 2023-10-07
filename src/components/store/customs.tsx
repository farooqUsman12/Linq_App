import Image from 'next/image';
import { useEffect } from 'react';

import AddYourDesign from '@/public/images/AddYourDesign.svg';
import CustomizationQR from '@/public/images/customizationQr.svg';
import DemoObjectMechine from '@/public/images/DemoBlackMechine.svg';

const AddDesign = () => {
  useEffect(() => {
    const eventListener = (className: string) => {
      const elements = document.querySelectorAll(className);
      const windowHeight = window.innerHeight;
      const elementVisible = 75;

      elements?.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    const handleScroll = () => {
      eventListener('.CustomizationQR');
      eventListener('.CustomizationLeftQR');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="mt-6">
      <div className="leadingCustomizationGradient pb-16 pt-12">
        <div className="mx-auto w-full text-center sm:max-w-fourHundred">
          <div className="mx-auto mb-4 sm:mb-14">
            <h5 className="mb-3 block pb-px font-NunitoSemiBold text-xs leading-5 text-white sm:hidden">
              Customizable
            </h5>
            <h5 className="hidden pb-px font-NunitoSemiBold text-base sm:mb-3 sm:block sm:leading-6 sm:text-white">
              Make It Yours with Industry-Leading Customization
            </h5>
            <p className="px-2 text-center font-OutfitLight text-base leading-6 text-white sm:text-twentyTwoThemeSize sm:leading-7">
              <span className="hidden sm:block">
                Upgrade your lead gen game with fully-branded, one-tap tools.
              </span>
              <span className="mb-16 block font-OutfitSemiBold sm:hidden">
                Any color. Add your logo. <br /> Any style you want
              </span>
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className=" flex items-center justify-center px-5 lg:justify-between 2xl:ml-28">
            <div className="hidden lg:block">
              <Image
                src={CustomizationQR}
                alt="Tap-v2"
                className="CustomizationQR w-full"
              />
            </div>

            <div
              style={{ backgroundImage: `url(${AddYourDesign.src})` }}
              className="relative flex h-52	w-full max-w-xs items-center justify-center bg-contain bg-no-repeat"
            >
              <a
                href="https://buy.linqapp.com/collections/custom-products"
                className="button gradientBtn glow-on-hover absolute flex h-14 w-44 items-center justify-center rounded-lg bg-white font-NunitoBold text-base leading-6 text-primary lg:w-48"
              >
                Add Your Design
              </a>
            </div>

            <div className="hidden lg:block">
              <Image
                src={DemoObjectMechine}
                alt="mini Hub"
                className="CustomizationLeftQR w-[185px] 2xl:w-72"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDesign;
