const BookADemo = () => {
  return (
    <div>
      <div className="mx-auto mt-16 flex flex-col items-center justify-between rounded-lg border border-[#EEF0FA] p-4 sm:px-16 sm:py-11 md:px-11 md:py-9 lg:flex-row">
        <div className="text-center md:text-left">
          <p className="font-OutfitMedium text-xl leading-9 sm:text-2xl">
            Not sure what to choose?
          </p>
          <p className="mt-2 font-OutfitLight text-base">
            We will help you build a plan according to your needs
          </p>
        </div>
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#006DFF] py-4 text-center font-NunitoRegular text-base font-normal md:mt-0 md:w-48"
        >
          <p className="mx-auto text-white ">Book a Demo</p>
        </button>
      </div>
    </div>
  );
};
export default BookADemo;
