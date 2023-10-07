import useEventListener from '@/utils/eventListener';

const BuildYourLinqPage = () => {
  useEventListener('.BottomAnimation');
  useEventListener('.LeftAnimation');
  useEventListener('.RightAnimation');
  useEventListener('.TopAnimation');

  return (
    <div className="mt-0.5 pt-16">
      <h2 className="BottomAnimation mb-5 text-center font-OutfitMedium text-themeFortySize text-black">
        Build Your Linq Page in seconds
      </h2>
      <p className="mb-5 mt-0.5 text-center font-NunitoLight text-base font-normal text-blackGrey">
        Get started by enter your unique page name to create your Linq Page
      </p>

      <form className="flex items-center justify-center" method="post">
        <input
          type="text"
          name="email"
          placeholder="linqapp.com/ yourname"
          className="LeftAnimation h-10 w-full max-w-twoHunderNine rounded-l-lg border border-midGrey p-twentyTwo py-0 font-NunitoRegular text-base outline-none sm:h-14 sm:max-w-threeTwentyThree"
        />
        <button
          type="button"
          className="RightAnimation h-10 w-full max-w-oneTwenty rounded-r-lg bg-primary font-NunitoBold text-sm text-white sm:h-14 sm:max-w-twoTwentyFive sm:text-base"
        >
          Create my Page
        </button>
      </form>
    </div>
  );
};
export default BuildYourLinqPage;
