import Army from '../../../public/images/BusinessRelation/army.png';
import Exp from '../../../public/images/BusinessRelation/exp.png';
import Holliester from '../../../public/images/BusinessRelation/Hollister.png';
import Remax from '../../../public/images/BusinessRelation/remax.png';
import Studio from '../../../public/images/BusinessRelation/studio.png';
import Subaro from '../../../public/images/BusinessRelation/subaru.png';
import BusinessCard from './businessCard';
import LogoCard from './logoCard';

export interface BusinessCardSchema {
  [key: string]: string;
  value: string;
  text: string;
}

const BusinessCardData: BusinessCardSchema[] = [
  { value: '75M+', text: 'Interactions' },
  { value: '50K+', text: 'Businesses' },
  { value: '4K+', text: '5 Stars reviews' },
  { value: '10M+', text: 'People' },
];

const BusinessLogoA = [Holliester, Subaro];
const BusinessLogoB = [Exp, Studio];
const BusinessLogoC = [Army, Remax];

const BusinessRelation = () => {
  return (
    <div className="businessBg px-2 md:px-6 xl:px-[92px]">
      <p className="mx-auto px-4 pb-9 pt-10 text-center text-base font-normal leading-9 sm:text-xl md:pb-14 md:pt-20">
        10M+ people and businesses have built relationships with with Linq
      </p>
      <div className="flex flex-col xl:flex-row">
        <div className="flex w-full flex-wrap md:flex-nowrap xl:w-[30%] xl:flex-wrap">
          {BusinessCardData.map((card) => (
            <BusinessCard key={card.text} cardData={card} />
          ))}
        </div>
        <div className="relative mt-16 flex w-full flex-wrap justify-center gap-6 md:justify-between xl:-top-6 xl:mt-0 xl:w-[70%] xl:justify-end">
          <div className="flex sm:w-[85%] sm:justify-between md:block md:w-auto">
            {BusinessLogoA.map((logo) => (
              <LogoCard key={String(logo)} cardData={logo} />
            ))}
          </div>
          <div className="flex sm:w-[85%] sm:justify-between md:block md:w-auto">
            {BusinessLogoB.map((logo) => (
              <LogoCard key={String(logo)} cardData={logo} />
            ))}
          </div>
          <div className="flex sm:w-[85%] sm:justify-between md:block md:w-auto">
            {BusinessLogoC.map((logo) => (
              <LogoCard key={String(logo)} cardData={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessRelation;
