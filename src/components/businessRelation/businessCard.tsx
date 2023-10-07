/* eslint-disable no-nested-ternary */
import type { FC } from 'react';

import type { BusinessCardSchema } from '.';

interface Props {
  cardData: BusinessCardSchema;
}
const BusinessCard: FC<Props> = ({ cardData }) => {
  return (
    <div className="w-[50%]">
      <p className="text-center text-[43.36px] font-bold text-[#40455D]">
        {cardData.value}
      </p>
      <p className="text-center text-sm font-normal text-[#40455D]">
        {cardData.text}
      </p>
    </div>
  );
};

export default BusinessCard;
