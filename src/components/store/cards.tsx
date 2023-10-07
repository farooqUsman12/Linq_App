import Image from 'next/image';

import BestSellingImageMobile from '@/public/images/BestSellingProductMobile.png';
import BestSellingImage from '@/public/images/BestSellingProducts.png';

const BestSellingProducts = () => {
  return (
    <div className="px-4">
      <div className="sellingBoxShadow mx-auto mt-8 max-w-twelveFiftyTwo rounded-3xl bg-black sm:mt-14">
        <div className="pt-6 text-center text-white">
          <p className="font-NunitoMedium text-base">Cards</p>
          <p className="mt-3 font-OutfitMedium text-base sm:text-2xl sm:leading-tight">
            Our best-selling products.
          </p>
          <a
            href="https://buy.linqapp.com/collections/cards"
            className="button hover:brightness-125"
          >
            Shop Cards
          </a>
          <div className="flex justify-center">
            <Image
              src={BestSellingImage}
              alt="best-selling"
              className="bestSallerAnimation hidden sm:block"
            />
            <Image
              src={BestSellingImageMobile}
              alt="best-selling-mobile"
              className="block sm:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
