import Image from 'next/image';
import Link from 'next/link';

import ArrowForword from '@/public/images/arrow-forward-outline.png';
import BackgroundLinq from '@/public/images/backgroundLIn1.png';
import IphoneIcon from '@/public/images/IphoneIcon.png';
import JaaneCard from '@/public/images/JanneCoperCard.png';

const TabletView = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundLinq.src})` }}
      className="relative mx-auto mt-6 hidden min-h-[237px] w-full max-w-[655px] bg-contain bg-no-repeat sm:block lg:hidden"
    >
      <div>
        <div className="relative top-16 w-2/4 pt-2">
          <div className="flex justify-center">
            <p className="text-2xl font-semibold text-white">Linq for Teams</p>
          </div>
          <p className="text-center text-sm font-normal leading-[21px] text-white">
            Powerful sales tools that grow and scale with your team.
          </p>
          <div className="mt-4 flex justify-center">
            <Link href="/" className="text-sm leading-[16.11px] text-[#006DFF]">
              Learn More
            </Link>
            <Link href="/">
              <Image
                src={ArrowForword}
                alt="Arrow"
                className="ml-2 w-full max-w-[19.23px]"
              />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-2/4">
          <div>
            <Image
              src={IphoneIcon}
              alt="I-phone"
              className="w-full max-w-[213.42px]"
            />
          </div>
          <div>
            <Image
              src={JaaneCard}
              alt="card"
              className="absolute left-28 top-11 w-full max-w-[206.11px] pl-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabletView;
