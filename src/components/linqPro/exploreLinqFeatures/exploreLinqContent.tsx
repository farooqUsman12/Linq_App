import useEventListener from '@/utils/eventListener';

const ExploreLiqContent = () => {
  useEventListener('.BottomAnimation');
  useEventListener('.TopAnimation');

  return (
    <>
      <h1 className="BottomAnimation mb-6 mt-px px-4 pt-1 text-center font-OutfitMedium text-themeThirtyTwo text-white md:mb-6 md:text-themeFortySize">
        Explore Linq Pro Features
      </h1>
      <p className="TopAnimation mx-auto mb-10 w-full max-w-xl px-2 text-center font-NunitoMedium text-base text-midGrey">
        Discover a new level of Linq with powerful features designed to turn
        connections into conversions.
      </p>
    </>
  );
};

export default ExploreLiqContent;
