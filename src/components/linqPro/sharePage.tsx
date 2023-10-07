import Image from 'next/image';

import useEventListener from '@/utils/eventListener';

import AudeinceIphone from '../../../public/images/audient-iphone.png';
import Send from '../../../public/images/send.svg';

const SharePage = () => {
  useEventListener('.LeftAnimation');
  useEventListener('.RightAnimation');

  return (
    <div className="bg-bluishPurple pt-20">
      <div className="mx-auto mt-1.5 flex max-w-5xl flex-col px-4 md:flex-row md:px-16">
        <div className="LeftAnimation text-center md:w-1/2 md:text-left">
          <div className="mb-2 flex justify-center md:justify-start">
            <Image src={Send} alt="send" className="mr-4 hidden md:block" />
            <p className="font-NunitoBold text-base text-yellowGreen">
              Share Your Page Anywhere
            </p>
          </div>
          <h2 className="px-10 font-OutfitMedium text-themeThirtyTwoSize leading-normal text-white md:px-0 md:text-themeFortySize">
            2x your audience <br /> with a smart linq-in-bio.
          </h2>
          <div className="mb-14 md:mb-[72px] md:w-80">
            <p className="mb-thirty mt-4 px-8 font-NunitoMedium text-sm text-GrayBlack md:px-0 md:text-base">
              Start for free! No credit card required. Add your page to your
              social media bios, share it in your email signature. Upgrade to
              Linq Pro anytime for just $5/mo
            </p>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="h-10 w-fourtyEightPercent rounded-lg bg-primary font-NunitoBold text-sm text-white"
              >
                Free 30 days trial
              </button>
              <button
                type="button"
                className="h-10 w-fourtyEightPercent rounded-lg bg-lightWhite font-NunitoBold text-sm text-darkBluish"
              >
                Free 30 days trial
              </button>
            </div>
          </div>
        </div>
        <div className="RightAnimation relative md:w-1/2">
          <Image
            src={AudeinceIphone}
            alt="audience iphone"
            className="bottom-0 right-0 mx-auto md:absolute"
          />
        </div>
      </div>
    </div>
  );
};
export default SharePage;
