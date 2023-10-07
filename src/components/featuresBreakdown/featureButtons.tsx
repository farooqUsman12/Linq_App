import type { FC } from 'react';

const ButtonData: string[] = [
  'Start for free',
  'Start free trail',
  'Start free trail',
  'Contact Us',
];

const FeatureButtons: FC = () => {
  return (
    <div className="mx-auto mb-10 flex max-w-7xl flex-wrap justify-center gap-5 px-6 md:justify-end md:px-10">
      {ButtonData.map((btnText: string) => (
        <button
          key={btnText}
          type="button"
          className={`h-[40px]  w-full items-center justify-center rounded-xl sm:w-[48%] md:w-[137px] ${
            btnText === 'Contact Us' ? 'bg-[#000F31]' : 'bg-primary'
          }  text-center font-NunitoRegular text-base font-normal`}
        >
          <p className="mx-auto text-white ">{btnText}</p>
        </button>
      ))}
    </div>
  );
};
export default FeatureButtons;
