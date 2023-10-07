import Image from 'next/image';

import useEventListener from '@/utils/eventListener';

import MailIcon from '../../../public/images/mail-icon.svg';

const JoinMembers = () => {
  useEventListener('.TopAnimation');
  useEventListener('.BottomAnimation');

  return (
    <div className="mx-auto w-thirteenFourteen max-w-md py-14 text-center sm:w-full">
      <div className="TopAnimation px-4">
        <Image src={MailIcon} alt="mail icon" className="mx-auto mb-5 pb-0.5" />
        <h4 className="mb-6 font-OutfitMedium text-2xl text-black md:mb-8">
          Join Members Section
        </h4>
        <p className="font-NunitoRegular text-base text-blackGrey">
          Enjoy new and limited products, exclusive events, special offers and
          much more before anyone else.
        </p>
      </div>
      <div className="BottomAnimation mt-7">
        <form className="flex items-center justify-center" method="post">
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="h-10 w-full max-w-twoHunderNine rounded-l-lg border border-midGrey p-twentyTwo py-0 font-NunitoRegular text-base outline-none sm:h-14 sm:max-w-threeHundredNine	"
          />
          <button
            type="button"
            className="h-10 w-oneThirtySix rounded-r-lg bg-primary font-NunitoBold text-sm	text-white sm:h-14 sm:text-base"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default JoinMembers;
