import Image from 'next/image';
import { type FC, useEffect, useState } from 'react';

import { useIsTabletViewport } from '@/hooks/use-is-mobile-viewport';

import Vector from '../../utils/Images/Vector.png';

interface Props {
  heading: string;
  features: string[];
}
const PricingDetails: FC<Props> = ({ heading, features }) => {
  const isMobile = useIsTabletViewport();
  const [updatedFeatures, setUpdatedFeatures] = useState<Array<string>>(
    isMobile ? features?.slice(0, 5) : features
  );
  const [showButton, setShowButton] = useState<string>('Show More');

  const showButtonHandler = () => {
    if (showButton === 'Show More') {
      setShowButton('Show Less');
      setUpdatedFeatures(features);
    } else if (showButton === 'Show Less') {
      setShowButton('Show More');
      setUpdatedFeatures(features?.slice(0, 5));
    }
  };

  useEffect(() => {
    setUpdatedFeatures(isMobile ? features?.slice(0, 5) : features);
  }, [isMobile]);

  return (
    <div className="w-full rounded px-4 py-1 hover:rounded-lg hover:shadow-lg hover:shadow-gray-200 dark:shadow-none sm:w-[48.7%] md:w-[262px]  ">
      <div className="">
        <div className="flex items-center md:block xl:flex">
          <p className="pb-4 font-NunitoSemiBold text-base leading-[22px] text-black">
            {heading}
          </p>
        </div>
        <div className="mb-1">
          {updatedFeatures?.map((feature) => (
            <div key={feature} className="flex items-center">
              <Image src={Vector} alt="tick" className="mr-2 h-3 w-3" />
              <p
                className="py-2	font-NunitoMedium text-sm leading-5 text-black"
                key={feature}
              >
                {feature}
              </p>
            </div>
          ))}
          {isMobile ? (
            <button
              type="button"
              className="cursor-pointer text-primary underline"
              onClick={showButtonHandler}
            >
              {showButton}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
