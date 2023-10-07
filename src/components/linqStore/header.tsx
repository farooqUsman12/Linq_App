import Image from 'next/image';

import faqSvg from '@/utils/Images/faq.svg';
import headphones from '@/utils/Images/headphones.svg';

const LinqStoreHeader = () => {
  return (
    <div className="flex justify-between mx-auto mt-12 w-full lg:max-w-7xl">
      <div className="px-2 md:px-6 xl:px-[92px]">
        <p className="text-4xl font-medium">Industry-leading NFC</p>
        <p className="text-4xl font-medium"> product assortment</p>
      </div>
      <div className="mr-10">
        <div className="flex">
          <Image src={faqSvg} alt="faq" />
          <div>
            <p>Frequently asked questions</p>
            <p className="text-[#006DFF]"> FAQ</p>
          </div>
        </div>
        <div className="mt-6 flex">
          <Image src={headphones} alt="faq" />
          <div>
            <p>Have questions about buying Linq product?</p>
            <p className="text-[#006DFF]"> Chat with a Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinqStoreHeader;
