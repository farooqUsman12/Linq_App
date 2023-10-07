import Image from 'next/image';

import useEventListener from '@/utils/eventListener';

import ArrowFwd from '../../../public/images/arrowforward.svg';
import CocaCola from '../../../public/images/Shape.svg';
import iPhone from '../../../public/images/subscriberiPhone.png';
import Tag from '../../../public/images/tag.svg';

const ExclusiveSubscribers = () => {
  useEventListener('.BottomAnimation');
  useEventListener('.LeftAnimation');
  useEventListener('.RightAnimation');
  useEventListener('.TopAnimation');
  useEventListener('.BottomAnimation');

  return (
    <div className="mx-auto	w-full max-w-xl pt-11 text-center">
      <div className="TopAnimation mb-6 flex justify-center">
        <Image src={Tag} alt="tag" className="mr-mx" />
        <p className="ml-2.5 font-NunitoBold text-sm text-cGreen sm:text-base">
          Exclusive Offer
        </p>
      </div>

      <h4 className="mt-mx TopAnimation mb-5 px-8 font-OutfitMedium text-themeThirtyTwoSize leading-none text-semiGray sm:px-0 sm:text-themeFortySize">
        Going Pro Pays Off
      </h4>
      <p className="TopAnimation mb-5 mt-0.5 font-NunitoRegular text-sm text-blackGrey sm:text-base">
        Get 40% off your next Linq Store order when you start an annual plan.
      </p>
      <a href="https://linqapp.com/subscriptions" className="button">
        Upgrade to Pro{' '}
        <Image
          src={ArrowFwd}
          alt="fwd"
          className="ml-2 inline-block align-middle"
        />
      </a>

      <div className="BottomAnimation relative mx-auto mt-10 max-w-sm px-8 pb-36 sm:max-w-lg sm:pb-48">
        <div className="flex h-40 w-56 items-center justify-center rounded-lg bg-red px-8 sm:w-80 ">
          <Image src={CocaCola} alt="coca cola" />
        </div>
        <Image
          src={iPhone}
          alt="iPhone"
          className="absolute bottom-0 right-14 w-40 sm:right-0 sm:w-56"
        />
      </div>
    </div>
  );
};
export default ExclusiveSubscribers;
