// import {
//   useIsMobileViewport,
//   useIsTabletViewport,
// } from '@/hooks/use-is-mobile-viewport';

import PricingCard from './pricingCard';
import {
  PricingCardDataBusinesses,
  PricingCardDataIndividuals,
} from './pricingData';
import PricingDetails from './pricingDetails';

const IndividualButton = () => (
  <div className="bestIndividual mx-auto mb-4 flex h-auto w-full rounded-lg px-1 py-[9px] text-center font-bold text-white sm:pl-4 sm:pr-3.5">
    <p className="mx-auto text-sm">Best for Individuals</p>
  </div>
);
const BusinessesButton = () => (
  <div className="mx-auto mb-4 flex h-auto w-full rounded-lg bg-gradient-to-r from-[#B060FF] to-[#005CD9] px-1 py-[9px]  text-center font-bold text-white hover:bg-primary sm:pl-4 sm:pr-3.5">
    <p className="mx-auto text-sm">Best for Businesses</p>
  </div>
);

const PricingPlans = () => {
  return (
    <div className="px-2 md:px-6 xl:px-[92px]">
      <div className="mb-10 flex items-center justify-center font-OutfitMedium font-medium sm:text-fortyThemeSize">
        <h1 className=" text-[32px] font-medium lg:text-[40px]">
          Plans & Pricing
        </h1>
      </div>
      <div className="gap-2 lg:flex xl:gap-4">
        <div className="lg:w-1/2">
          <IndividualButton />
          <div
            id="pricingA-card-container"
            className="mt-4 justify-between gap-2 md:flex xl:gap-4"
          >
            {PricingCardDataIndividuals.map((card) => {
              const {
                headingText,
                pricingDetails: { heading, features },
              } = card;
              return (
                <div
                  key={headingText}
                  className="mb-6 flex w-full flex-col flex-wrap md:w-[49%]"
                >
                  <PricingCard key={headingText} cardData={card} />
                  <PricingDetails heading={heading} features={features} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2">
          <BusinessesButton />
          <div
            id="pricingA-card-container"
            className="mt-4 justify-between gap-2 md:flex xl:gap-4"
          >
            {PricingCardDataBusinesses.map((card) => {
              const {
                headingText,
                pricingDetails: { heading, features },
              } = card;
              return (
                <div
                  key={headingText}
                  className="mb-6 flex flex-col flex-wrap md:w-[49%]"
                >
                  <PricingCard key={headingText} cardData={card} />
                  <PricingDetails heading={heading} features={features} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
