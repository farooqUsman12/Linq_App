import Image from 'next/image';

import ArrowForward from '../../../../../public/images/arrowforward.svg';
import Date from '../../../../../public/images/date.svg';
import Graph from '../../../../../public/images/graph.svg';
import Hours from '../../../../../public/images/past24hours.svg';
import VisitorBox from '../../../../../public/images/visitorbox.svg';

const VisitorAnalytic = () => {
  return (
    <>
      <div className="mt-8 overflow-hidden md:hidden">
        <div className="rounded-eight ml-9 w-full max-w-fiftySeven border-2 border-solid border-blackNormal p-4">
          <Image
            src={VisitorBox}
            className="Imagedelay w-full max-w-twentyFour"
            alt="Visitor Box"
          />
        </div>
        <h3 className="fadeInRightHeading ml-0.5 mt-2 pl-6 pr-1 font-OutfitMedium text-xl text-white sm:pl-9">
          Advanced Analytics
        </h3>
        <ul className="fadeInRightPragraph ml-4 mt-4 list-disc pl-6 pt-0.5 font-NunitoLight text-sm font-normal leading-6 text-GrayBlack sm:ml-8 sm:pl-9">
          <li>Real-time insights across Linq Page</li>
          <li>Click-level analytics for detailed results</li>
          <li>Never miss a thing with activity history</li>
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
        <div className="ml-6 mt-11 flex px-0.5 sm:ml-10">
          <div>
            <Image src={Hours} alt="Past" className="Imagedelay2 rounded-xl" />
          </div>
          <div>
            <div>
              <Image
                src={Date}
                alt="Date"
                className="fadeInRightImage ml-3 mt-5 w-full rounded-ten"
              />
            </div>
            <div>
              <Image
                src={Graph}
                alt="Graph"
                className="fadeInRightImage2 relative right-11 z-10 mt-6 rounded-ten"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16  hidden justify-center pt-2 md:flex md:px-10 lg:px-0">
        <div className="mr-px">
          <div className="rounded-eight w-full max-w-fiftySeven border-2 border-solid border-blackNormal p-4">
            <Image
              src={VisitorBox}
              className="Imagedelay w-full max-w-twentyFour"
              alt="Visitor Box"
            />
          </div>
          <h3 className="fadeInRightHeading mt-2 font-OutfitMedium text-2xl text-white">
            Advanced Analytics
          </h3>
          <ul className="fadeInRightParagraph mt-4 list-disc pl-4 pt-0.5 font-NunitoLight text-base font-normal leading-6 text-GrayBlack">
            <li>Real-time insights across Linq Page</li>
            <li>Click-level analytics for detailed results</li>
            <li>Never miss a thing with activity history</li>
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
        <div className="ml-20 flex pl-1">
          <div>
            <Image
              src={Hours}
              alt="Past 24Hours"
              className="Imagedelay2 rounded-xl"
            />
          </div>
          <div>
            <div>
              <Image
                src={Date}
                alt="Date"
                className="fadeInRightImage ml-3 mt-5 w-full rounded-ten"
              />
            </div>
            <div>
              <Image
                src={Graph}
                alt="Graph"
                className="fadeInRightImage2 relative right-11 z-10 mt-6 rounded-ten"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisitorAnalytic;
