import Image from 'next/image';

import ArrowDown from '../../utils/Images/arrow-down.svg';

const CompareFeaturesButton = () => {
  return (
    <div className="px-2 md:px-6 xl:px-[92px]">
      <button
        type="button"
        className="mx-auto mt-14 flex w-full items-center justify-center rounded-lg bg-[#EDF0FF] py-4 text-center font-NunitoBold text-base text-[#005CD9]"
      >
        <p className="mr-2">Compare All Features</p>
        <Image height={18} width={18} src={ArrowDown} alt="down" />
      </button>
    </div>
  );
};
export default CompareFeaturesButton;
