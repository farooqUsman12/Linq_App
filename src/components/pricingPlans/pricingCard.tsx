/* eslint-disable no-nested-ternary */
import Image from 'next/image';
import type { FC } from 'react';

import type { PricingCardSchema } from './pricingData';

interface Props {
  cardData: PricingCardSchema;
}

export const CARD_STYLES: any = {
  Standard: {
    backgroundColor: 'bg-white',
  },
  Pro: {
    backgroundColor: 'bg-[#F6F8FF]',
  },
  Teams: {
    backgroundColor: 'bg-gradient-to-b from-[#006DFF] to-[#EDF0FF]',
  },
  Enterprise: {
    backgroundColor: 'bg-gradient-to-b from-[#000F31] to-[#006DFF]',
    buttonStyle: 'bg-[#EDF0FF] text-[#005CD9]',
  },
};

const PricingCard: FC<Props> = ({ cardData }) => {
  const {
    img,
    headingText,
    extraHeadingText,
    subText,
    buttonText,
    pricingA,
    pricingB,
    pricingC,
  } = cardData;

  const isEnterprise = headingText === 'Enterprise';
  const isTeams = headingText === 'Teams';

  return (
    <div
      className={`relative mb-[44px] h-auto w-full max-w-full gap-4 rounded-2xl border border-solid border-[#DFE1EE] pb-4 md:h-[300px] md:pb-0 lg:h-[320px] lg:max-w-[262px] xl:h-[300px] ${CARD_STYLES[headingText].backgroundColor} px-5 pt-6 hover:shadow-custom`}
    >
      <div>
        <div>
          <div>
            <div className="ml-1 flex items-center md:block xl:flex">
              <Image src={img} alt="No" />
            </div>
          </div>
        </div>
        <div className="ml-1 mt-2 flex items-baseline">
          <h3
            className={`font-OutfitMedium text-2xl font-medium ${
              isEnterprise ? 'text-white' : 'text-black'
            }`}
          >
            {headingText}
          </h3>
          <p className="pl-1 font-NunitoRegular text-base text-[#7D829D]">
            {extraHeadingText || ''}
          </p>
        </div>

        <div className=" pt-px">
          <p
            className={`ml-1 font-NunitoRegular text-sm ${
              isEnterprise
                ? 'text-[#DFE1EE]'
                : isTeams
                ? 'text-[#40455D]'
                : 'text-[#646984]'
            } `}
          >
            {subText}
          </p>
        </div>
        <div className="ml-1 mt-7 flex pt-px">
          <p
            className={`${
              isEnterprise ? 'text-white' : 'text-black'
            } text-2xl  ${pricingA === 'Dynamic pricing' ? 'text-[17px]' : ''}`}
          >
            {pricingA}
          </p>
          {pricingB && <p className="mt-3 text-base">{pricingB}</p>}
        </div>
        {pricingC && (
          <div className="ml-1">
            <p className="text-sm">{pricingC}</p>
          </div>
        )}
        <button
          type="button"
          className={` ${
            headingText === 'Pro' ? 'mt-[9.5px]' : 'lg: mt-4 xl:mt-8'
          } inset-x-0 mx-auto flex h-auto w-full items-center justify-center rounded-xl py-[15px] md:w-11/12 ${
            CARD_STYLES[headingText].buttonStyle || 'bg-[#006DFF] text-white'
          }  bottom-4 text-center font-NunitoRegular text-base font-normal md:absolute`}
        >
          <p className="mx-auto">{buttonText}</p>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
