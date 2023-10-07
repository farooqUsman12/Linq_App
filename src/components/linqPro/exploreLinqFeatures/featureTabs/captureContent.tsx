import Image from 'next/image';

import ArrowForward from '../../../../../public/images/arrowforward.svg';
import CaptureIconBox from '../../../../../public/images/captureIconBox.svg';
import MessageBox from '../../../../../public/images/messagebox.png';
import SnippetContact from '../../../../../public/images/snippet.svg';
import ZOHO from '../../../../../public/images/zoho.svg';
import ZOHO2 from '../../../../../public/images/zoho2.svg';

const CaptureContact = () => {
  return (
    <>
      <div className="mt-8 overflow-hidden md:hidden">
        <div className="rounded-eight ml-9 w-full max-w-fiftySeven border-2 border-solid border-blackNormal p-4">
          <Image
            src={CaptureIconBox}
            className="Imagedelay w-full max-w-twentyFour"
            alt="Captur Icon Box"
          />
        </div>
        <h3 className="fadeInRightHeading ml-0.5 mt-2 pl-6 pr-1 font-OutfitMedium text-xl text-white sm:pl-9">
          Instant Contact Capture
        </h3>
        <ul className="fadeInRightParagraph ml-8 mt-4 list-disc pl-2 pt-0.5 font-NunitoLight text-sm font-normal leading-6 text-GrayBlack sm:pl-9">
          <li>Save business cards with a single scan</li>
          <li>Collect payment and surveys </li>
          <li>Customize follow-up messaging</li>
          <li>Popular CRM integration options</li>
          <li>Redirect page to any URL</li>
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
        <div className="ml-7">
          <div className="flex">
            <div>
              <Image
                src={ZOHO2}
                alt="ZOHO"
                className="Imagedelay2 fadeinleft relative z-20 mt-5"
              />
            </div>
            <div>
              <div>
                <Image
                  src={MessageBox}
                  alt="Message Box"
                  className="fadeInRightImage Imagedelay2 relative right-2 z-10 mt-10 rounded-xl"
                />
              </div>
              <div>
                <Image
                  src={SnippetContact}
                  alt="Snippet"
                  className="fadeInRightImage2 Imagedelay2 relative -top-5 left-7 h-[11.813rem] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16  hidden justify-center pt-2 md:flex md:px-10 lg:px-0">
        <div className="mr-px">
          <div className="rounded-eight w-full max-w-fiftySeven border-2 border-solid border-blackNormal p-4">
            <Image
              src={CaptureIconBox}
              className="Imagedelay w-full max-w-twentyFour"
              alt="Captur Icon Box"
            />
          </div>
          <h3 className="fadeInRightHeading mt-2 font-OutfitMedium text-2xl text-white">
            Instant Contact Capture
          </h3>
          <ul className="fadeInRightParagraph mt-4 list-disc pl-4 pt-0.5 font-NunitoLight text-base font-normal leading-6 text-GrayBlack">
            <li>Save business cards with a single scan</li>
            <li>Collect payment and surveys </li>
            <li>Customize follow-up messaging</li>
            <li>Popular CRM integration options</li>
            <li>Redirect page to any URL</li>
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
        <div className="ml-20 pl-1">
          <div className="flex">
            <div>
              <Image
                src={ZOHO}
                alt="ZOHO"
                className="Imagedelay2 fadeInleft relative z-20 mt-5"
              />
            </div>
            <div>
              <div>
                <Image
                  src={MessageBox}
                  alt="Message Box"
                  className="fadeInRightImage relative right-2 z-10 mt-10 rounded-xl"
                />
              </div>
              <div>
                <Image
                  src={SnippetContact}
                  alt="Snippet"
                  className="Imagedelay2 relative -top-4 left-14 h-[11.813rem] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaptureContact;
