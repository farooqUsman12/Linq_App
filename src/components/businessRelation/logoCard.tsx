/* eslint-disable no-nested-ternary */
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

interface Props {
  cardData: StaticImageData;
}
const LogoCard: FC<Props> = ({ cardData }) => {
  return (
    <div className="flex items-center justify-center">
      <Image src={cardData} alt="logo" />
    </div>
  );
};

export default LogoCard;
