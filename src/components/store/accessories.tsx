import Image from 'next/image';

import AccessoriesImage from '@/public/images/Accessories.png';
import Bundels from '@/public/images/Bundles.png';
import LeadCapture from '@/public/images/leadcapture.png';
import LinqPaperImage from '@/public/images/LinaPaperImg.png';
import LinqPaper from '@/public/images/Linqpaper.png';

const accessoriesData = [
  {
    id: '1',
    alt: 'Lead',
    image: LeadCapture,
    btnText: 'Shop Now',
    link: 'https://buy.linqapp.com/collections/event-products',
    h1: 'Event Products',
    h2: 'Stand out from the crowd.',
  },
  {
    id: '2',
    alt: 'Accessory',
    image: AccessoriesImage,
    btnText: 'Shop Now',
    link: 'https://buy.linqapp.com/collections/accessories',
    h1: 'Accessories',
    h2: 'Accessories for instant connections.',
  },
  {
    id: '3',
    alt: 'Bundle',
    image: Bundels,
    btnText: 'Shop Now',
    link: 'https://buy.linqapp.com/collections/bundles',
    h1: 'Bundle',
    h2: 'Bundle and save.',
  },
  {
    id: '4',
    alt: 'Linq',
    image: LinqPaper,
    btnImage: LinqPaperImage,
    btnText: 'Add Your Design',
    link: 'https://buy.linqapp.com/collections/print-shop',
    h1: ' Premium, high-quality print options to round out your networking toolkit.',
    h2: 'For those moments that call for leaving behind a great impression.',
  },
];

const Accessories = () => {
  return (
    <div className="px-4">
      <div
        className="mx-auto my-6 max-w-twelveFiftyTwo flex-wrap justify-between gap-4 sm:flex"
        style={{ filter: 'drop-shadow(4px 4px 22px rgba(0, 0, 0, 0.15))' }}
      >
        {accessoriesData.map((accessory, index) => (
          <div
            key={accessory.id}
            className="relative mx-auto mb-4 max-w-sixHundredSeven text-center text-black sm:mb-0 sm:w-[48%] lg:w-fourtyNine"
          >
            <div
              className={`h-[320px] rounded-2xl  bg-cover bg-center bg-no-repeat sm:h-[370px] md:h-[400px] lg:h-[450px] xl:h-[550px] ${
                index === 2 || index === 3 ? ' ' : ''
              } `}
              style={{ backgroundImage: ` url(${accessory.image.src} )` }}
            />
            <div className="absolute inset-x-0 top-3 sm:mt-7">
              {accessory.btnImage && (
                <div>
                  <Image
                    src={accessory.btnImage}
                    alt={accessory.alt}
                    className="mx-auto h-auto"
                  />
                </div>
              )}
              <p
                className={` 
                ${
                  index === 0 || index === 1
                    ? 'mx-auto w-48 font-OutfitLight text-2xl text-white'
                    : ' mt-2.5 font-NunitoMedium sm:mt-0 '
                }
                ${
                  index === 2
                    ? 'mx-auto w-48 font-OutfitLight text-2xl text-semiGray sm:leading-8 lg:w-[405px]'
                    : ' mt-2.5 font-NunitoMedium sm:mt-0 '
                } ${
                  index === 3
                    ? 'mx-auto hidden font-OutfitLight text-base leading-6 text-semiGray sm:block md:max-w-[425px] md:text-xl md:leading-8 lg:text-2xl'
                    : ' mt-2.5 font-NunitoMedium text-base sm:mt-0 '
                }`}
              >
                {accessory.h1}
              </p>
              <p
                className={`mt-1 text-base leading-8 ${
                  index === 2 || index === 3
                    ? 'text-semiGray'
                    : 'font-OutfitMedium text-lightWhite'
                }  ${
                  index === 3
                    ? 'mx-auto my-2 block w-60 font-OutfitLight text-sm leading-tight text-semiGray sm:hidden'
                    : 'font-OutfitMedium text-lightWhite'
                } sm:mt-3 sm:text-2xl`}
              >
                {accessory.h2}
              </p>
              <a
                href={accessory.link}
                className={`button hover:brightness-125 
                ${
                  index === 3
                    ? 'gradientBtn designBtn glow-on-hover text-primary '
                    : 'text-white'
                }
                 sm:mt-4`}
              >
                {accessory.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
