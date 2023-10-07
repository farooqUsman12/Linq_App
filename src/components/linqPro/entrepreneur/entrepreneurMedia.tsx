import useEventListener from '@/utils/eventListener';

const EntrepreneurMedia = () => {
  useEventListener('.BottomAnimation');
  useEventListener('.LeftAnimation');
  useEventListener('.RightAnimation');
  useEventListener('.TopAnimation');
  useEventListener('.growing');

  return (
    <>
      <div className="mt-14 flex items-baseline justify-center md:hidden">
        <div className="w-full max-w-[8.438rem]">
          <div className="ml-11 min-h-[6.438rem] max-w-seventyNine rounded-ten bg-midPink">
            <div className="unsplashimg min-h-[4.438rem] max-w-seventyNine rounded-tenTopLeftRight bg-no-repeat" />
            <p className="mt-1.5 text-center font-OutfitRegular text-themeEight text-white">
              /PotatGaming
            </p>
          </div>
          <button
            type="button"
            className="rounded-lg bg-bluishPurple px-[0.938rem] py-[0.438rem] font-NunitoRegular text-xs font-semibold text-darkGray md:mt-3.5"
          >
            Twitch Streamer
          </button>
        </div>
        <div className="ml-4 w-full max-w-oneSeventySeven">
          <div className="min-h-[14.313rem] max-w-oneSeventySeven rounded-twentyThree bg-midGreen">
            <div className="portter2img min-h-[9.938rem] max-w-oneSeventySeven rounded-twentyThreeTopLeftRight bg-no-repeat" />
            <p className="mt-4 pt-0.5 text-center font-OutfitLight text-themeNineteen font-normal text-white">
              /RandallPorter
            </p>
          </div>
          <button
            type="button"
            className="mt-3 rounded-lg bg-bluishPurple px-[0.938rem] py-[0.438rem] font-NunitoRegular text-xs font-semibold text-darkGray"
          >
            Fashion influencer
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center pt-0.5 md:hidden">
        <div className="flex w-full max-w-[10.188rem] flex-col items-end">
          <div className="w-full max-w-oneSixtyTwo">
            <div className="min-h-[13.063rem] max-w-oneSixtyTwo rounded-twentyOne bg-midBlue">
              <div className="tice2img min-h-[9.688rem] max-w-oneSixtyTwo rounded-twentyOneTopLeftRight bg-no-repeat" />
              <p className="mt-2 text-center text-base text-white">
                /HannahTice
              </p>
            </div>
            <button
              type="button"
              className="mt-3 rounded-lg bg-bluishPurple px-[0.938rem] py-[0.438rem] font-NunitoRegular text-xs font-semibold text-darkGray md:mb-0.5"
            >
              Real estate agent
            </button>
          </div>
          <div className="w-full max-w-seventyNine">
            <div className="mt-5 min-h-[6.438rem] max-w-seventyNine rounded-ten bg-midBrown">
              <div className="martinimg min-h-[5.375rem] max-w-seventyNine rounded-tenTopLeftRight bg-no-repeat" />
              <p className="mb-px mt-0 text-center text-themeEight text-white">
                /EthanMartin
              </p>
            </div>
            <button
              type="button"
              className="relative right-8 mb-0.5 mt-3 rounded-lg bg-bluishPurple px-[0.938rem] py-[0.438rem] font-NunitoRegular text-xs font-semibold text-darkGray"
            >
              Photographer
            </button>
          </div>
        </div>
        <div className="ml-3 pl-px">
          <div>
            <div className=" ml-10x mb-px min-h-[7.25rem] max-w-ninety rounded-xl bg-midOrange">
              <div className="michelimg min-h-[5.25rem] max-w-ninety rounded-t-xl bg-no-repeat" />
              <p className="mt-1.5 text-center font-OutfitLight text-themetenSize font-normal text-white">
                /SamCaudle
              </p>
            </div>
            <button
              type="button"
              className="mt-3.5 rounded-lg bg-bluishPurple px-[0.938rem] py-[0.438rem] font-NunitoRegular text-xs font-semibold text-darkGray"
            >
              Real estate agent
            </button>
          </div>
          <div className="mt-6 pt-px">
            <div className="min-h-[8.25rem] max-w-oneHundredTwo rounded-thirteen bg-darkBrown">
              <div className="michelimg2 min-h-[6rem] max-w-oneHundredTwo rounded-thirteenTopLeftRight bg-no-repeat" />
              <p className="mt-1.5 text-center font-OutfitLight text-themeEleven font-normal text-white">
                /OblivianBar
              </p>
            </div>
            <button
              type="button"
              className="mt-3.5 rounded-lg bg-bluishPurple px-[0.938rem] py-[0.438rem] font-NunitoRegular text-xs font-semibold text-darkGray"
            >
              Podcast Channel
            </button>
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-center md:mt-16 md:flex md:pt-px">
        <div className="BottomAnimation mr-px">
          <div className="fadeInBottomAudience md:ml-10x bg-midOrange md:mb-px md:ml-11 md:min-h-[8.125rem] md:max-w-hundred md:rounded-thirteen">
            <div className="michelimg bg-no-repeat md:min-h-[5.875rem] md:max-w-hundred md:rounded-thirteenTopLeftRight" />
            <p className="text-center font-OutfitRegular  text-white md:mt-1.5 md:text-themetenSize">
              /SamCaudle
            </p>
          </div>
          <button
            type="button"
            className="bg-bluishPurple font-NunitoRegular font-semibold md:mt-3.5 md:rounded-lg md:px-[0.938rem] md:py-[0.438rem] md:text-sm md:text-darkGray"
          >
            Real estate agent
          </button>
        </div>

        <div className="ml-9 mr-0.5">
          <div className="TopAnimation bg-[#FF7AAA] md:ml-14 md:min-h-[6.438rem] md:max-w-seventyNine md:rounded-ten">
            <div className="unsplashimg bg-no-repeat md:min-h-[4.438rem] md:max-w-seventyNine md:rounded-tenTopLeftRight" />
            <p className="text-center font-OutfitRegular  text-white md:mt-1.5 md:text-themeEight">
              /PotatGaming
            </p>
          </div>
          <button
            type="button"
            className="bg-bluishPurple font-NunitoRegular font-semibold md:mt-3.5 md:rounded-lg md:px-[0.938rem] md:py-[0.438rem] md:text-sm md:text-darkGray"
          >
            Twitch Streamer
          </button>
          <div className="BottomAnimation bg-darkBrown md:mt-7 md:min-h-[11.438rem] md:max-w-oneFourtyTwo md:rounded-nineteen">
            <div className="michelimg2 bg-no-repeat md:min-h-[8.375rem] md:max-w-oneFourtyTwo md:rounded-nineteenTopLeftRight" />
            <p className="text-center font-OutfitRegular  text-white md:mt-1.5 md:text-base">
              /OblivianBar
            </p>
          </div>
          <button
            type="button"
            className="bg-bluishPurple font-NunitoRegular font-semibold md:mt-3.5 md:rounded-lg md:px-[0.938rem] md:py-[0.438rem] md:text-sm md:text-darkGray"
          >
            Podcast Channel
          </button>
        </div>
        <div className="ml-6 mr-0.5 pl-px">
          <div className="growing bg-midGreen md:min-h-[17.938rem] md:max-w-twoTwentyTwo md:rounded-twentyNine">
            <div className="portterimg bg-no-repeat md:min-h-[12.438rem] md:max-w-twoTwentyTwo md:rounded-twentyNineTopLeftRight" />
            <p className="text-center font-OutfitRegular  text-white md:mt-6 md:text-2xl">
              /RandallPorter
            </p>
          </div>
          <button
            type="button"
            className="bg-bluishPurple font-NunitoRegular font-semibold md:ml-[4.375rem] md:mt-3 md:rounded-lg md:px-[0.938rem] md:py-[0.438rem] md:text-sm md:text-darkGray"
          >
            Fashion influencer
          </button>
        </div>
        <div className="relative top-14 ml-6">
          <div>
            <div className="TopAnimation bg-midBlue md:min-h-[11.563rem] md:max-w-oneFourtyThree md:rounded-nineteen">
              <div className="ticeimg bg-no-repeat md:min-h-[8.5rem] md:max-w-oneFourtyThree md:rounded-nineteenTopLeftRight" />
              <p className="text-center text-white md:mt-2 md:text-base">
                /HannahTice
              </p>
            </div>
            <button
              type="button"
              className="bg-bluishPurple font-NunitoRegular font-semibold md:mb-0.5 md:mt-3 md:rounded-lg md:px-[0.938rem] md:py-[0.438rem] md:text-sm md:text-darkGray"
            >
              Real estate agent
            </button>
          </div>
          <div>
            <div className="BottomAnimation bg-midBrown md:mt-5 md:min-h-[6.438rem] md:max-w-seventyNine md:rounded-ten">
              <div className="martinimg bg-no-repeat md:min-h-[5.375rem] md:max-w-seventyNine md:rounded-tenTopLeftRight" />
              <p className="text-center text-white md:mb-px md:mt-0 md:text-themeEight">
                /EthanMartin
              </p>
            </div>
            <button
              type="button"
              className="bg-bluishPurple font-NunitoRegular font-semibold md:mb-0.5 md:mt-3 md:rounded-lg md:px-[0.938rem] md:py-[0.438rem] md:text-sm md:text-darkGray"
            >
              Photographer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EntrepreneurMedia;
