import Image from 'next/image';

import ArrowForward from '../../../../../public/images/arrowforward.svg';
import HighlyCustomizeFrame from '../../../../../public/images/highlyCustomizeframe.svg';
import IconDot from '../../../../../public/images/icondots.svg';
import Layer2 from '../../../../../public/images/layer2.svg';
import MaisonLogo from '../../../../../public/images/maisonlogo.svg';
import NameBox from '../../../../../public/images/namebox.png';
import PlayBtn from '../../../../../public/images/playbtn.svg';
import UpperArrow from '../../../../../public/images/upperarrow.svg';

const HighlyCustomize = () => {
  return (
    <>
      <div className="mt-8 overflow-hidden md:hidden">
        <div>
          <Image
            src={HighlyCustomizeFrame}
            alt="CustomizeFrame"
            className="Imagedelay mb-3.5 ml-9 pl-0.5"
          />
        </div>
        <h3 className="fadeInRightHeading ml-0.5 mt-2 pl-6 pr-1 font-OutfitMedium text-xl text-white sm:pl-9">
          Digital Business Card Tailored to You
        </h3>
        <ul className="fadeInRightParagraph ml-8 mt-4 list-disc pl-2 pt-0.5 font-NunitoLight text-sm font-normal leading-6 text-GrayBlack sm:pl-9">
          <li>Create and manage up to 5 digital business cards</li>
          <li>Add multimedia embed like videos and audio</li>
          <li>Seamless calendar integration and meeting scheduling</li>
          <li>Offer downloadable PDFs and files</li>
        </ul>
        <a href="https://linqapp.com/subscriptions" className="button">
          Ready, Set, Pro
          <span className="inline-block align-middle">
            <Image
              src={ArrowForward}
              className="ml-1 w-full max-w-eighteen"
              alt="ArrowForward"
            />
          </span>
        </a>
        <div className="mt-9 flex pl-6 pr-0.5 pt-0.5">
          <div className="mt-3.5">
            <div className="maisonimg2 fadeInleft relative z-10 mb-px min-h-[7.188rem] w-[9.313rem] bg-no-repeat" />
            <div className="fadeInBottom float-right mr-8 mt-4">
              <Image src={UpperArrow} alt="UpperARROW" />
            </div>
          </div>
          <div>
            <div className="fadeInRightButton2 flex min-h-[2.813rem] w-full max-w-twoHundredFourteen justify-center rounded-[0.313rem] bg-lightWhite px-0.5 pb-[0.938rem]  pt-[1.063rem]">
              <Image
                src={Layer2}
                className="w-full max-w-fourtyFive"
                alt="Layer"
              />
            </div>
            <div>
              <Image
                src={NameBox}
                className="Imagedelay2 relative right-5 mt-7 h-[16.5rem] w-full max-w-twoTwentySeven rounded-xl"
                alt="Name Box"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16  hidden justify-center pt-2 md:flex md:px-10 lg:px-0">
        <div className="mr-px">
          <div>
            <Image
              src={HighlyCustomizeFrame}
              alt="CustomizeFrame"
              className="Imagedelay"
            />
          </div>
          <h3 className="fadeInRightHeading mt-2 font-OutfitMedium text-2xl text-white">
            Digital Business Card Tailored to You
          </h3>
          <ul className="fadeInRightParagraph mt-4 list-disc pl-4 pt-0.5 font-NunitoLight text-base font-normal leading-6 text-GrayBlack">
            <li>Create and manage up to 5 digital business cards</li>
            <li>Add multimedia embed like videos and audio</li>
            <li>Seamless calendar integration and meeting scheduling</li>
            <li>Offer downloadable PDFs and files</li>
          </ul>
          <a href="https://linqapp.com/subscriptions" className="button">
            Ready, Set, Pro
            <span className="inline-block align-middle">
              <Image
                src={ArrowForward}
                className="ml-1 w-full max-w-eighteen"
                alt="ArrowForward"
              />
            </span>
          </a>
        </div>
        <div className="ml-16 mt-9 flex pl-1.5 pt-0.5">
          <div className="mt-3.5">
            <div className="maisonimg fadeInleft relative z-10 mb-px min-h-[7.188rem] w-[12.5rem] bg-no-repeat">
              <div className="ml-1.5 mt-1 flex items-center pl-px">
                <Image
                  src={MaisonLogo}
                  className="w-full max-w-nineteen"
                  alt="Maison LOGO"
                />
                <span className="ml-1.5 font-Arial text-themeEight font-normal text-white">
                  Maison View | Touring a historic...
                </span>
                <Image src={IconDot} alt="Icon Dot" className="ml-5" />
              </div>
              <Image
                src={PlayBtn}
                className="mx-auto mt-6 w-full max-w-twentyEight pt-0.5"
                alt="PlAY Button"
              />
            </div>
            <div className="fadeInBottom float-right mr-8 mt-5 pt-0.5">
              <Image src={UpperArrow} alt="UpperARROW" />
            </div>
          </div>
          <div>
            <div className="fadeInRightButton2 ml-4 flex min-h-[2.813rem] w-full max-w-twoHundredFourteen justify-center rounded-[0.313rem] bg-lightWhite px-5 pb-[0.938rem] pl-0.5 pt-[1.063rem]">
              <Image
                src={Layer2}
                className="w-full max-w-fourtyFive"
                alt="Layer"
              />
            </div>
            <div>
              <Image
                src={NameBox}
                className="Imagedelay2 relative right-5 mt-7 h-[16.5rem] w-full max-w-twoTwentySeven rounded-xl"
                alt="Name Box"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HighlyCustomize;
