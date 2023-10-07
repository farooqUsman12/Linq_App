import Image from 'next/image';
import Link from 'next/link';

import Iphone from '@/public/images/iPhone.png';
import LearnMoreIcon from '@/public/images/LearnMore.png';
import LinqBGPhone from '@/public/images/LinqBgPhone.png';
import ReatalorCard2 from '@/public/images/ReatalorCard2.png';

const MobileView = () => {
  return (
    <div
      style={{ backgroundImage: `url(${LinqBGPhone.src})` }}
      className="relative mx-auto mb-11 mt-6 h-[450px] w-full max-w-[343px] bg-contain bg-no-repeat sm:hidden"
    >
      <div className="mx-auto w-full max-w-[181.01px] pt-[41.64px]">
        <div className="flex items-center justify-center">
          <p className="text-xl font-semibold text-white">Linq for Teams</p>
        </div>
        <p className="text-center text-xs leading-5 text-white">
          Powerful sales tools that grow and scale with your team.
        </p>
        <Link href="/">
          <Image
            src={LearnMoreIcon}
            alt="Learn More"
            className=" mx-auto mt-1.5 min-h-[10.62px] w-full max-w-[67.06px]"
          />
        </Link>
      </div>
      <div className="absolute bottom-0 mt-[72.68px] w-full">
        <div className="mt-[32.48px]">
          <div>
            <Image
              src={Iphone}
              alt="iphone"
              className="w-full max-w-[164.86px]"
            />
          </div>
          <div>
            <Image
              src={ReatalorCard2}
              alt="CARD"
              className="absolute left-16 top-16 mx-auto w-full max-w-[253.3px] pl-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileView;
