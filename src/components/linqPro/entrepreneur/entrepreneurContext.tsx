import Image from 'next/image';

import useEventListener from '@/utils/eventListener';

import UserPlus from '../../../../public/images/user-plus.svg';

const EntrepreneurContext = () => {
  useEventListener('.BottomAnimation');

  return (
    <>
      <div className="flex justify-center">
        <div>
          <Image
            src={UserPlus}
            className="relative top-1.5 mr-3.5 hidden pt-px md:block md:max-w-twentyTwo"
            alt="user plus"
          />
        </div>
        <div>
          <p className="BottomAnimation mt-1 text-center font-NunitoBold text-sm text-lightGreen md:ml-px md:text-base">
            Who is Linq Pro for?
          </p>
        </div>
      </div>
      <h3 className="mx-auto mt-4 max-w-xs px-14 text-center font-OutfitMedium text-themeThirtyTwoSize text-white md:mt-2.5 md:w-full md:max-w-full md:px-0 md:text-themeFortySize">
        Created for Everyone
      </h3>
      <p className="mt-4 px-10 text-center font-NunitoMedium text-xs text-midGrey md:mb-3 md:text-base">
        Whether you’re a creator, a gamer, a founder, or still figuring it out –
        <br />
        rise to the (pro)ccasion along with 200,000+ successful users.
      </p>
    </>
  );
};
export default EntrepreneurContext;
