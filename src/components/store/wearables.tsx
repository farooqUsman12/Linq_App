import Image from 'next/image';

import ConversionTool from '@/public/images/conversion-tools.png';
import MobileRibbon from '@/public/images/mobileRibbon.png';

export const Wearables = () => {
  return (
    <div className="mx-auto mt-3 max-w-twelveFiftyTwo sm:mt-16">
      <div className="mt-9 pb-1 text-center text-semiGray sm:mt-6">
        <p className="font-NunitoMedium text-xs sm:text-base">Wearables</p>
        <p className="mx-auto mt-4 w-4/5 px-8 font-OutfitMedium text-xl leading-normal sm:w-full sm:px-11 sm:text-2xl">
          Conversion tools that go where you do.
        </p>
        <a
          href="https://buy.linqapp.com/collections/wearables"
          className="button hover:brightness-125"
        >
          Shop Now
        </a>
      </div>
      <div className="flex justify-center sm:hidden">
        <Image src={MobileRibbon} alt="conversion-tools" className="block" />
      </div>
      <div className="hidden sm:flex">
        <Image
          src={ConversionTool}
          alt="conversion-tools"
          className="mx-auto block"
        />
      </div>
    </div>
  );
};
